import { ChangeEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Poppins } from '@next/font/google';
import Image from 'next/image';
import profile from '../../public/profile.svg'

const poppins = Poppins({weight:"400", subsets:['latin']})

const Comment = (props:{
    name: string
    content: string
    isEditable: boolean
    commentId: number
    image: string
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(props.content);
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleCancelEdit = () => {
      setIsEditing(false);
      setContent(props.content);
    };
  
    const handleSaveEdit = () => {
      // Handle saving the edited content here
      console.log(`Saving edited content: ${content}`);
      setIsEditing(false);
    };
  
    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    };

    return (
      <div
        className={`flex flex-col gap-1 pt-2 px-4 rounded-lg bg-MidnightOcean text-themeColor`}
      >
        <div className="flex items-center justify-start gap-2">
          <Image src={props['image'] === '' ? profile : props['image']} alt={''} width={30} height={30} className='rounded-full'/>
          <span className='text-[1rem] font-bold m-2'>{props.name}</span>
          {props['isEditable'] &&
            <button
              className="focus:outline-none"
              onClick={handleEditClick}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          }
        </div>
        {!isEditing && <p>{props.content}</p>}
        {isEditing && (
          <div className="flex flex-col gap-1">
            <textarea
              className="w-full h-12 bg-Midnight border-b-2 border-themeColor focus:outline-none px-4 py-2 resize-none"
              value={content}
              onChange={handleContentChange}
            />
            <div className="flex justify-end gap-1">
              <button className="bg-MidnightOcean text-white px-4 py-2 rounded focus:outline-none" onClick={handleSaveEdit}>Save</button>
              <button className="text-white px-4 py-2 rounded border bg-Midnight focus:outline-none" onClick={handleCancelEdit}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  

export default Comment