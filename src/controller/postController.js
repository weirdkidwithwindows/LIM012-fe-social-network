/* eslint-disable no-console */
import { auth } from '../firebaseInit.js';
import {
  createPostBD, deletePostBD, getPostBD, updatePostBD, getAllPostsBD,
} from '../model/post.model.js';
import { uploadImage } from '../model/storage-post.js';
import { post } from '../view/post.js';

const commentText = document.getElementById('comment-input');
const commentBtn = document.getElementById('comment-btn');

;
