class MentorSerializer < ActiveModel::Serializer
  attributes :id, :name,:email,:phone,:password_digest,:profile_image
end
