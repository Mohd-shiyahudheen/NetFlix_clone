import React, { useEffect, useState } from 'react';
import "./RowPost.css"
import axios from '../../axios'
import Youtube from 'react-youtube'
import {imageUrl ,API_KEY} from '../../constents/constent'

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState("");
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results);
            setMovies(response.data.results)
        })

    }, []);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      const handleMovie =(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if (response.data.results!==0) {
                setUrlId(response.data.results[0])
            }else{
                console.log("Trailer not available");
            }
        })
      }
    return (
        <div className='row'>
            <h3>{props.title}</h3>
            <div className='posters'>
                {movies.map((obj) =>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
          {  urlId &&  <Youtube opts={opts} videoId={urlId.key}/> }
        </div>
    );
}

export default RowPost;
