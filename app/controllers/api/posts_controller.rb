class Api::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: current_user.post.all 
  end

  def create
    post = current_user.posts.new(post_params)

    if post.save 
      render json: post
    else
      render json: post.errors, status: 422
    end
  end  

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end

end
