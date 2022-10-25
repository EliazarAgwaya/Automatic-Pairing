class MentorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_response
    # Retrieve all technical mentors details
    def index
        render json: Mentor.all, status: :ok
    end

    # Get a technical mentor details
    def show
        render json: Mentor.find(params[:id])
    end

    # create a new mentor
    def create
        mentor = Mentor.create!(mentor_params)
        session[:mentor_id] = mentor.id
        render json: mentor, status: :created
    end
    private
    #Handle not found exception
    def not_found_response
        render json: {error:"Record not found"}, status: :not_found
    end


    def mentor_params
        params.permit(:name,:email,:phone,:password,:password_confirmation,:profile_image)
    end


    def invalid_response(invalid)
        render json:{errors:invalid.record.errors}, status: :unprocessable_entity
    end
end
