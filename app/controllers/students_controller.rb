class StudentsController < ApplicationController
  skip_before_action :authorize, only: :create 
  #sign up new student
  def create 
    student = Student.create!(student_params)

    render json: student, status: :created 
  end

  def show 
    render json: @current_student
  end

  def index 
    render json: Student.all, status: :ok
  end

  private 
  def student_params
    params.permit(:username, :email, :profile_image, :password, :password_confirmation) 
  end

end
