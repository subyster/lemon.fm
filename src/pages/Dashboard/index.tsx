import React from 'react';
import { FaCaretDown } from 'react-icons/fa';

import {
  Container,
  Content,
  MainColumn,
  StatsColumn,
  MainColumnHeader,
} from './styles';

import Header from '../../components/Header';
import MainArtistCard from '../../components/MainArtistCard';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <MainColumn>
          <MainColumnHeader>
            <strong>Top Artists</strong>
            <button>
              <span>All time</span>
              <FaCaretDown />
            </button>
          </MainColumnHeader>

          <MainArtistCard />
        </MainColumn>

        <StatsColumn />
      </Content>
    </Container>
    );
}

export default Dashboard;
