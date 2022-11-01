class GroupsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Group.all
    end
    def show
        render json: Group.find(params[:id])
    end
    def create
        # Group.delete_all
        group = Group.create(group_params)
        render json: group, status: :created
    end

    def destroy
        Group.delete_all
    end

    private
    def group_params
        params.permit(:name)
    end
end
