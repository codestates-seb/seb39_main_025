/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as S from './SnsFormStyles';
import UploadIcon from '../../../assets/upload-file.png';
import LeftArrow from '../../../assets/left-arrow.png';
import TempProfilePic from '../../../assets/paw-active.png';

function SnsUploadForm({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const defaultFileName = 'Drag Photos and Videos Here';
  const [files, setFiles] = useState(null);
  const [previews, setPreviews] = useState([]);
  const [fileName, setFileName] = useState(defaultFileName);
  const [textMsg, setTextMsg] = useState('');

  const imgSelectHandler = async (e) => {
    const imageFiles = e.target.files;
    setFiles(imageFiles);
    // * Refactor

    const imagePreviews = await Promise.all(
      [...imageFiles].map(async (imageFile) => {
        return new Promise((resolve, reject) => {
          try {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.onload = (event) =>
              resolve({
                imgSrc: event.target.result,
                fileName: imageFile.name,
              });
          } catch (err) {
            reject(err);
          }
        });
      }),
    );
    setPreviews(imagePreviews);
  };

  // * 게시글 텍스트 인풋값 onChange 핸들러
  const handleTextInput = (e) => {
    setTextMsg(e.target.value);
  };

  // * 게시글 업로드버튼 onSubmit 핸들러
  const onSubmit = async (e) => {
    e.preventDefault();
    // 요청 본문에서 파일 형식을 form-data로 하므로 append only. -> .append(key, value)
    const formData = new FormData();
    // loop 돌면서 formData에 이미지 여러장을 한장씩 append
    for (const file of files) formData.append('image', file);
    formData.append('text', textMsg);
    console.log(formData);

    try {
      const res = await axios.post('', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('업로드 완료');
      setTimeout(() => {
        setFileName(defaultFileName);
        setPreviews(null);
      }, 3000);
      console.log(res);
      navigate('/');
    } catch (err) {
      toast.error(err.message);
      setFileName(defaultFileName);
      setPreviews(null);
    }
  };

  const previewImages = previews.map((preview) => (
    <div>
      <img
        src={preview.imgSrc}
        alt=""
        className={preview.imgSrc && 'show'}
        key={preview.imgSrc}
      />
    </div>
  ));

  return (
    <S.ModalBackDrop isOpen={isOpen}>
      <S.FormContainer>
        <S.FormHeader>
          <S.HeaderReturnBtnBox onClick={() => setIsOpen(!isOpen)}>
            <img src={LeftArrow} alt="cancel upload and show previous page" />
          </S.HeaderReturnBtnBox>
          <h1>Create New Post</h1>
          <S.HeaderShareBtn type="button" onClick={onSubmit}>
            SHARE
          </S.HeaderShareBtn>
        </S.FormHeader>
        <S.FormWrapper
          action=""
          onSubmit={onSubmit}
          enctype="multipart/form-data"
        >
          <S.FormLeftBox>
            <S.ImagCard
              className={previewImages.length !== 0 ? 'show' : null}
              cover={
                <S.CarouselWrapper autoplay>{previewImages}</S.CarouselWrapper>
              }
            />

            <S.FormDropperBox>
              <S.FileDropIconBox>
                <img src={UploadIcon} alt="upload-icon" />
              </S.FileDropIconBox>
              <label htmlFor="image">{fileName}</label>
              <input
                id="image"
                type="file"
                multiple
                accept="image/*"
                onChange={imgSelectHandler}
              />
              <S.UploadAreaBtn type="button">업로드</S.UploadAreaBtn>
            </S.FormDropperBox>
          </S.FormLeftBox>
          <S.FormRightBox>
            <S.FormRightUserInfo>
              <S.UserProfilePic img src={TempProfilePic} alt="user-profile" />
              <S.UserName>username</S.UserName>
            </S.FormRightUserInfo>
            <S.FormTextInputBox>
              <textarea
                onChange={handleTextInput}
                placeholder="내용을 적어 주세요..."
              />
            </S.FormTextInputBox>
            <S.FormRightMidBox>
              <span>위치</span>
            </S.FormRightMidBox>
            <S.FormRightMidBox>
              <span>태그</span>
            </S.FormRightMidBox>
          </S.FormRightBox>
        </S.FormWrapper>
      </S.FormContainer>
    </S.ModalBackDrop>
  );
}

export default SnsUploadForm;
