<?php 

    require_once '../models/movieModel.php';
    require_once '../bl/movie-BLL.php';
    
    class MovieController {


        function getAll_Movies() {
            $movie_bll = new movie_BLL();
            $resultSet = $movie_bll->get_movies();

            $allMovies = array();

            while ($row = $resultSet->fetch())
            {                           
                array_push($allMovies, new MovieModel([ "movie_id" => $row['movie_id'], 
                                                        "movie_name" => $row['movie_name'],
                                                        "director_id" => $row['director_id'],
                                                        "director_name" => $row['director_name']],
                                                         $errorInInput));
            }
            return $allMovies;
        }

        function create_update_Movie($params, $method, &$applicationError) {
            $Movie = new MovieModel($params, $applicationError);
            if ($applicationError != "") { //error found in data members of movie object - faulty user input
                return;
            }
            $movie_bll = new movie_BLL();
            $movie_bll->insert_update_movie($params, $method, $applicationError);
        }

        function delete_Movie($params) {
                    $movie_bll = new movie_BLL();
                    $movie_bll->delete_movie($params);
        }
        
        // function getCustomerById($id) {
        //     $array = [
        //         "id" => $id,
        //         "name" => MD5($id)
        //     ];
           
        //     $c = new CustomerModel($array);
        //     return $c->jsonSerialize();
        // }
    }

?>
