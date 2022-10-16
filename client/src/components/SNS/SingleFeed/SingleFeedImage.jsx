import React from 'react';
import {
  SingleFeedImageLayout,
  CarouselWrapper,
  ImagCard,
} from './SingleFeedImageStyle';
import 'antd/dist/antd.min.css';

function SingleFeedImage({ item }) {
  // console.log(item);
  return (
    <SingleFeedImageLayout>
      <ImagCard
        cover={
          <CarouselWrapper autoplay>
            <div key={item.id}>
              <img
                alt="post"
                src={`https://server.staybuddy.net/upload/${item.postImageUrl}`}
              />
            </div>
          </CarouselWrapper>
        }
      />
    </SingleFeedImageLayout>
  );
}
export default SingleFeedImage;
