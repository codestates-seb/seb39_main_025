import React from 'react';
import {
  SingleFeedImageLayout,
  SingleFeedImageCounter,
  CarouselWrapper,
  ImagCard,
} from './SingleFeedImageStyle';
import 'antd/dist/antd.min.css';

function SingleFeedImage() {
  return (
    <SingleFeedImageLayout>
      <ImagCard
        cover={
          <CarouselWrapper autoplay>
            <div>
              <img
                src="https://crowdfunding.or.kr/uploads/blog/img_627706222db64.jpg"
                alt="강아지"
              />
            </div>
            <div>
              <img
                src="https://contents.lotteon.com/itemimage/_v122546/LO/19/45/61/03/64/_1/94/56/10/36/5/LO1945610364_1945610365_1.png/dims/optimize/dims/resizemc/400x400"
                alt="강아지"
              />
            </div>
            <div>
              <img
                src="https://cdn.mkhealth.co.kr/news/photo/202102/52163_52859_5928.jpg"
                alt="강아지"
              />
            </div>
          </CarouselWrapper>
        }
      />

      <SingleFeedImageCounter>1/4</SingleFeedImageCounter>
    </SingleFeedImageLayout>
  );
}
export default SingleFeedImage;
