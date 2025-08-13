// src/components/MainContent.js
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MusicPlayer from './MusicPlayer';
import {
  useRecommendedSongs,
  useTop100,
  useTopGenresPlaylists,
  useTopFavouriteArtists,
} from '../api/musicApi';

const ContentContainer = styled.div`
  padding: 20px;
  color: #fff;
  background: linear-gradient(to bottom, #3A1414, #000000);
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 18px;
`;

const CardGridWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 0 40px;
`;

const CardGrid = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const CardContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const Card = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const ScrollRightButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: rgba(0,0,0,0.5);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0,0,0,0.8);
  }
`;

export default function MainContent() {
  const gridRefs = useRef([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const { data: recommended } = useRecommendedSongs();
  const { data: top100 } = useTop100();
  const { data: genres } = useTopGenresPlaylists();
  const { data: artists } = useTopFavouriteArtists();

  const scrollRight = (sectionIndex) => {
    const grid = gridRefs.current[sectionIndex];
    if (grid) {
      grid.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Combine all songs for MusicPlayer
  const tracks = [
    ...(recommended?.data || []),
    ...(top100?.data?.flatMap((playlist) => playlist.songs || []) || [])
  ];

  const handleCardClick = () => {
    setCurrentTrackIndex(prev => (prev + 1) % tracks.length);
    console.log('Phát bài mới:', tracks[(currentTrackIndex + 1) % tracks.length]?.name);
  };

  return (
    <ContentContainer>
      {/* Nghe gì hôm nay */}
      <SectionTitle>Nghe gì hôm nay</SectionTitle>
      <CardGridWrapper>
        <CardGrid ref={el => (gridRefs.current[0] = el)}>
          {(recommended?.data || []).map((song, index) => (
            <CardContainer key={song.id || index}>
              <Card onClick={handleCardClick}>
                <img
                  src={song.thumbnail || `/images/artist${(index % 5) + 1}.jpg`}
                  alt={song.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
              {index === 6 && (
                <ScrollRightButton onClick={() => scrollRight(0)}>›</ScrollRightButton>
              )}
            </CardContainer>
          ))}
        </CardGrid>
      </CardGridWrapper>

      {/* Nhạc top 100 */}
      <SectionTitle>Nhạc TOP 100</SectionTitle>
      <CardGridWrapper>
        <CardGrid ref={el => (gridRefs.current[1] = el)}>
          {(top100?.data || []).map((playlist, index) => (
            <CardContainer key={playlist.id || index}>
              <Card onClick={handleCardClick}>
                <img
                  src={playlist.thumbnail || `/images/top100${(index % 5) + 1}.jpg`}
                  alt={playlist.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
              {index === 6 && (
                <ScrollRightButton onClick={() => scrollRight(1)}>›</ScrollRightButton>
              )}
            </CardContainer>
          ))}
        </CardGrid>
      </CardGridWrapper>

      {/* Chủ đề */}
      <SectionTitle>Chủ đề</SectionTitle>
      <CardGridWrapper>
        <CardGrid ref={el => (gridRefs.current[2] = el)}>
          {(genres?.data || []).map((genre, index) => (
            <CardContainer key={genre.id || index}>
              <Card onClick={handleCardClick}>
                <img
                  src={genre.thumbnail || `/images/top100${(index % 5) + 1}.jpg`}
                  alt={genre.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
              {index === 6 && (
                <ScrollRightButton onClick={() => scrollRight(2)}>›</ScrollRightButton>
              )}
            </CardContainer>
          ))}
        </CardGrid>
      </CardGridWrapper>

      {/* Ca sỹ yêu thích */}
      <SectionTitle>Ca sỹ yêu thích</SectionTitle>
      <CardGridWrapper>
        <CardGrid ref={el => (gridRefs.current[3] = el)}>
          {(artists?.data || []).map((artist, index) => (
            <CardContainer key={artist.id || index}>
              <Card onClick={handleCardClick}>
                <img
                  src={artist.thumbnail || `/images/artist${(index % 5) + 1}.jpg`}
                  alt={artist.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
              {index === 6 && (
                <ScrollRightButton onClick={() => scrollRight(3)}>›</ScrollRightButton>
              )}
            </CardContainer>
          ))}
        </CardGrid>
      </CardGridWrapper>

      <MusicPlayer
        tracks={tracks}
        currentTrackIndex={currentTrackIndex}
        setCurrentTrackIndex={setCurrentTrackIndex}
      />
    </ContentContainer>
  );
}
