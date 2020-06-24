# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_patrons, Array
  has_many :posts

  def self.random_patron(ids)
    ids = ids.empty? ? [0] : ids
    Patron.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Patron.where("id IN (?)", ids)
  end
end
