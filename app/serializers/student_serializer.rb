class StudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_image, :gender, :mentor_id
  belongs_to :mentor
end
