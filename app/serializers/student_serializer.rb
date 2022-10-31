class StudentSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_image, :gender, :mentor_id, :group_id
  belongs_to :mentor
end
