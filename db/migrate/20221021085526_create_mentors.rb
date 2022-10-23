class CreateMentors < ActiveRecord::Migration[7.0]
  def change
    create_table :mentors do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :phone
      t.string :profile_image
      t.timestamps
    end
  end
end
