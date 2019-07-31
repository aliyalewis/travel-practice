class BucketListsController < ApplicationController

  def index
    logs = BucketList.all
    render json: logs
  end

  def show
    log = BucketList.find_by(user_id: params[:id])
    render json: log
  end


end
