import React from "react"
import Moment from "react-moment"

const Commentaires = ({ commentaires }) => {
  // console.log("commentaires", commentaires[1].text)
  return (
    <div>
      {(commentaires).map((commentaire) => {
        return(
          <li key={commentaire.id}>
            <p>Le <Moment format="DD/MM/YYYY">{commentaire.date}</Moment> : {commentaire.text} </p>
          </li>
        )
      })}
    </div>
  )
}

export default Commentaires