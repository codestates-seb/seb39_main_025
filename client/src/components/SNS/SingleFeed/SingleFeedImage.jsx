import React from 'react';
import {
  SingleFeedImageLayout,
  CarouselWrapper,
  ImagCard,
} from './SingleFeedImageStyle';
import 'antd/dist/antd.min.css';

function SingleFeedImage({ item }) {
  console.log(item);
  return (
    <SingleFeedImageLayout>
      <ImagCard
        cover={
          <CarouselWrapper autoplay>
            <div key={item.id}>
              <img
                alt="post"
                src={`http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/upload/${item.postImageUrl}`}
              />
            </div>
          </CarouselWrapper>
        }
      />
    </SingleFeedImageLayout>
  );
}
export default SingleFeedImage;
