class CreatePatrons < ActiveRecord::Migration[6.0]
  def change
    create_table :patrons do |t|
      t.string :name
      t.string :quote
      t.string :house
      t.string :city

      t.timestamps
    end
  end
end
