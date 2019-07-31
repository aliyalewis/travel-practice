class TravelLogsController < ApplicationController

  def index
    logs = TravelLog.all
    render json: logs
  end

  def show
    log = TravelLog.find_by(user_id: params[:id])
    render json: log
  end

end
