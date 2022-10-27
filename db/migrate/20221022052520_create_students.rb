class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :profile_image
      t.integer :mentor_id
      t.string :gender

      t.timestamps
    end
  end
end
