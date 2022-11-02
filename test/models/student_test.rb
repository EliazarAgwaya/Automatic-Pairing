require 'test_helper'
class StudentTest < ActiveSupport::TestCase

  test "user should be valid" do
    student = Student.create(username: "Eliazar Magero", email: "eliazar@moringaschool.com", gender: "Male", password: "magero", password_confirmation: "magero")
    assert student.valid?
    puts "student is valid"
  end

  test "username must be present" do
    student = Student.create(username: " ")
    assert_not student.valid?, "username is an empty string"
    puts "username present"
  end

  test "gender must be present" do
    student = Student.create(gender: " ")
    assert_not student.valid?, "gender is an empty string"
    puts "gender present"
  end

  test "email must be present and unique" do
    student = Student.create(email: " ")
    assert_not student.valid? && student.unique?, "email is an empty string"
    puts "email present and unique"
  end

  test "password must be present" do
    student = Student.create(password: " ")
    assert_not student.valid, "password is an empty string"
    puts "password present"
  end

end