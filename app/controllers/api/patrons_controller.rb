class Api::PatronsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: User.random_patron(current_user.liked_patrons)
  end

  def show
    render json: User.liked(current_user.liked_patrons)
  end

  def update
    current_user.liked_patrons << params[:id].to_i
    current_user.save
  end

  def my_friends
    render json: User.liked(current_user.liked_patrons)
  end 
end
