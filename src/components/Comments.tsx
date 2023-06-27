import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Poppins } from '@next/font/google';
import Image from 'next/image';
import profile from '../../public/profile.svg'
import { deltePostComment, editPostsComments, getPostComments, updateComment } from '@/lib/posts';
import { useSession } from 'next-auth/react';
import spinnerStyle from '../styles/spinner.module.css'


const poppins = Poppins({ weight: "300", subsets: ['latin'] })

const Comment = (props: {
  name: string
  content: string
  isEditable: boolean
  commentId: number
  image: string
  postId: number
}) => {

  const {data: session, status} = useSession()

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(props.content);
  const [loading, setLoading] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [readmore, setReadmore] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setContent(props.content);
  };

  const handleSaveEdit = async () => {
    setLoading(true)
    setLoading(false)
    setNewComment(content)
    setIsEditing(false);
  };

  const handleDelete = async () => {
    setLoading(true)
    const res = await deltePostComment(props['postId'], session, props['commentId'])
    if(res['request'] === 'fullfilled'){
      setDeleted(true)
    }
    setLoading(false)
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div
      className={`${poppins.className} h-fit flex flex-col gap-1 py-3 px-4 rounded-lg bg-MidnightOcean text-themeColor ${deleted && 'hidden'}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className='flex'>
        <Image src={props['image'] === '' ? profile : props['image']} alt={''} width={30} height={10} className='rounded h-8 w-8' />
        <span className='text-[1rem] font-bold m-2'>{props.name}</span>
        </div>
        {props['isEditable'] &&
          <div className='flex gap-2'>
            <button
              className="focus:outline-none"
              onClick={handleEditClick}
            >
              <FontAwesomeIcon icon={faEdit} className='h-4 w-4'/>
            </button>

            <button
              className="focus:outline-none"
              onClick={handleDelete}
            >
              <FontAwesomeIcon icon={loading ? faSpinner : faTrash} className={`${loading && spinnerStyle.spinner} h-4 w-4`}/>
            </button>
          </div>
        }
      </div>
      {/*@ts-ignore*/}
      {!isEditing && newComment === '' ? <div className={`max-w-full ${readmore ? 'max-h-fit': 'max-h-18'} break-words overflow-hidden`}>{`${props['content'].length > 180 ? props['content'].slice(0, 180) + '...' : props['content']}`}</div> : <div>{newComment}</div>}
      {isEditing && (
        <div className="flex flex-col gap-1">
          <textarea
            className="w-full h-12 bg-Midnight border-b-2 border-themeColor focus:outline-none px-4 py-2 resize-none"
            value={content}
            onChange={handleContentChange}
          />
          <div className="flex justify-end gap-1">
            <button className="bg-MidnightOcean text-white px-4 py-2 rounded focus:outline-none flex gap-2" onClick={handleSaveEdit}>{loading && <FontAwesomeIcon icon={faSpinner} className={`${loading && spinnerStyle.spinner} h-4 w-4`}/>} Save</button>
            <button className="text-white px-4 py-2 rounded border bg-Midnight focus:outline-none flex gap-2" onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default Comment