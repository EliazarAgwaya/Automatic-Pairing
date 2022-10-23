class Student < ApplicationRecord
  has_secure_password 
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true
  belongs_to :mentor
end
