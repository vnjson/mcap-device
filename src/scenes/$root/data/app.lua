
    local function getAdapter(mData, changeColor, getItemCountFunc, getTouchHelperFunc)
        return LuaRecyclerAdapter(luajava.createProxy('androlua.adapter.LuaRecyclerAdapter$AdapterCreator', {
            getItemCount = getItemCountFunc,
            getItemViewType = function(position) return 0 end,
            onCreateViewHolder = function(parent, viewType)
                local views = {}
                local holder = LuaRecyclerHolder(loadlayout(item_view, views, RecyclerView))
                holder.itemView.setTag(views)
                holder.itemView.getLayoutParams().width = ids.recyclerView.getWidth() / 5 - 1
                holder.itemView.setOnTouchListener(luajava.createProxy('android.view.View$OnTouchListener', {
                    onTouch = function(v, event)
                        if isDragging and MotionEventCompat.getActionMasked(event) == MotionEvent.ACTION_DOWN then
                            getTouchHelperFunc().startDrag(holder)
                        end
                        return false
                    end
                }))
                holder.itemView.setOnLongClickListener(luajava.createProxy('android.view.View$OnLongClickListener', {
                    onLongClick = function(v)
                        isDragging = true
                        adapter.notifyDataSetChanged()
                        return true
                    end
                }))
                holder.itemView.onClick = function()
                    local p = holder.getAdapterPosition() + 1
                    local item = mData[p]
                    newActivity(item.launchPage)
                end
                views.ic_del.onClick = function()
                    local p = holder.getAdapterPosition()
                    local id
                    if p + 1 <= #data then
                        id = data[p + 1].id
                        table.remove(data, p + 1)
                        adapter.notifyItemRemoved(p)
                    end
                    if id then FileUtils.removePlugin(id) end
                end
                return holder
            end,
            onBindViewHolder = function(holder, position)
                position = position + 1
                local views = holder.itemView.getTag()
                local item = mData[position]
                if views == nil or item == nil then return end
                if isDragging then
                    views.ic_del.setScaleX(0)
                    views.ic_del.setScaleY(0)
                    views.ic_del.setVisibility(0)
                    views.ic_del.animate().scaleX(1).scaleY(1).start()
                else
                    views.ic_del.setVisibility(8)
                end

                local icon = item.icon
                local radius = tonumber(config.home_icon_radius or '40')
                LuaImageLoader.loadWithRadius(views.icon, radius, icon)
                views.text.setText(item.text)
                local alpha = tonumber(config.home_bg_alpha or 9)
                if changeColor and alpha <= 5 then
                    views.text.setTextColor(0xFFFFFFFF)
                else
                    views.text.setTextColor(0xFF444444)
                end
            end,
        }))
    end

    local function getTouchHelperCallback(mData, mAdapter)
        return DragTouchHelper(luajava.createProxy('pub.hanks.sample.adapter.DragTouchHelper$Creator', {
            onMove = function(rec, holder, target)
                local fromPosition = holder.getAdapterPosition() + 1
                local toPosition = target.getAdapterPosition() + 1
                local tmp = mData[fromPosition]
                table.remove(mData, fromPosition)
                table.insert(mData, toPosition, tmp)
                mAdapter.notifyItemMoved(fromPosition - 1, toPosition - 1)
            end,
            isLongPressDragEnabled = function() return false end,
            clearView = function(rec, holder)
                local sortApps = {}
                for i = 1, #mData do
                    sortApps[#sortApps + 1] = mData[i].id
                end
                config.sortApps = sortApps
                saveConfig(config)
            end,
            getDragFlags = function() return 0xF end,
            getSwipeFlags = function() return 0 end,
        }))
    end
