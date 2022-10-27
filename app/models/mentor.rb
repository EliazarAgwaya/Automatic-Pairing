class Mentor < ApplicationRecord
    has_secure_password
    validates :name,:email,:phone,:password,:profile_image , presence:true
    validates :email, uniqueness:true

    has_many :students
end
