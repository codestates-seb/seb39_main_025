import React from 'react';
import { aboutdata } from '../../../data/data';
import { WeelyRankLayout, RankCard } from './WeeklyRankStyle';

function WeeklyRank() {
  const items = aboutdata.data;
  return (
    <WeelyRankLayout>
      <RankCard title="주간 랭킹">
        {items.map((item) => {
          return (
            <RankCard.Grid className="card-grid" key={item.id}>
              <img alt="post" src={item.src} />
            </RankCard.Grid>
          );
        })}
      </RankCard>
    </WeelyRankLayout>
  );
}

export default WeeklyRank;
