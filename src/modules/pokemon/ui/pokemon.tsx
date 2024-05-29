import { Image, Skeleton, Space } from 'antd';
import { FC } from 'react';

import { useGetPokemonByNameQuery } from '../domain/pokemon';

export const Pokemon: FC = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <Space
      align="center"
      direction="vertical">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Skeleton.Image active />
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <Image
            width={200}
            src={data.sprites.front_shiny}
            alt={data.species.name}
          />
        </>
      ) : null}
    </Space>
  );
};
