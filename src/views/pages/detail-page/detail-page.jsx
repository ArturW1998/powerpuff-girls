import { useSelector } from 'react-redux';

import { Details } from '../../components/details';
import { Episodes } from '../../components/episodes';
import { Error } from '../../components/error';

import { selectDetails, selectEpisodes, selectErrorMsg } from '../../../shared/selectors';
import useRequestApiDetailsAndEpisodes from '../../../hooks/useRequestApiDetailsAndEpisodes';

export const DetailPage = () => {
  useRequestApiDetailsAndEpisodes();

  const details = useSelector(selectDetails);
  const episodes = useSelector(selectEpisodes);
  const errorMsg = useSelector(selectErrorMsg);

  if (errorMsg) return <Error />;

  return (
    <section>
      <Details details={details} />
      <Episodes episodes={episodes} />
    </section>
  );
};
