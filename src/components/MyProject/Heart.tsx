'use client';
import { IconHeart,IconHeartFilled} from "@tabler/icons-react";
import { useState } from "react";

const HeartComponent = () => {
    const [liked, setLiked] = useState<boolean>(false);
    const handleLike = () => {
        setLiked(!liked);
    }
  return (
    <div>
      {
        liked ? <IconHeartFilled size={16} color="red" onClick={handleLike}/> : <IconHeart size={16} onClick={handleLike}/>}
    </div>
  )
}

export default HeartComponent;
