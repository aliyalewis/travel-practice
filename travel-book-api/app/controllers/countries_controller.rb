class CountriesController < ApplicationController

  def index
    countries = Country.all
    render json: countries
  end

  def show
    country = Country.find()
  end

end
