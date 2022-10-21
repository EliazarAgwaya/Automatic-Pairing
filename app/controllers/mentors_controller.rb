class MentorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    # Retrieve all technical mentors details
    def index
        render json: Mentor.all, status: :ok
    end

    # Get a technical mentor details
    def show
        render json: Mentor.find(params[:id])
    end

    private
    #Handle not found exception
    def not_found_response
        render json: {error:"Record not found"}, status: :not_found
    end
end
