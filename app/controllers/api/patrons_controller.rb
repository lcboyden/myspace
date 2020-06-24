class Api::PatronsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :update]
  
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

  def friends
    render json: User.liked(current_user.liked_patrons)
  end 

  def all_posts
    render json: Post.all
  end

  def my_posts
    render json: current_user.posts.all
  end

  def all_users
    render json: User.all
  end

  def get_current_user
    render json: current_user
  end

  def users_and_posts
    render json: User.find_by_sql("
      SELECT email, title FROM users
      INNER JOIN posts ON users.id = posts.user_id
      ORDER BY users.created_at desc
    ")
  end
end
