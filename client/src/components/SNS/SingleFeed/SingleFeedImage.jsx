import React from 'react';
import {
  SingleFeedImageLayout,
  CarouselWrapper,
  ImagCard,
} from './SingleFeedImageStyle';
import 'antd/dist/antd.min.css';

function SingleFeedImage({ item }) {
  const image = item.images;
  return (
    <SingleFeedImageLayout>
      <ImagCard
        cover={
          <CarouselWrapper autoplay>
            {image?.map((items) => {
              return (
                <div key={items.id}>
                  <img
                    alt="post"
                    src={`http://ec2-43-200-54-216.ap-northeast-2.compute.amazonaws.com:8080/upload/${items.postImageUrl}`}
                  />
                </div>
              );
            })}
          </CarouselWrapper>
        }
      />
    </SingleFeedImageLayout>
  );
}
export default SingleFeedImage;
