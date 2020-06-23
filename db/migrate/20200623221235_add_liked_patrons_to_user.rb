class AddLikedPatronsToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :liked_patrons, :text
  end
end
