class ExamplesController < ApplicationController

    def show
        example = Example.find(params[:id])
        render json: {
            example: example
        }
    end

end
