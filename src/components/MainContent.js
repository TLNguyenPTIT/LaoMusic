import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  padding: 20px;
  color: #fff;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const Card = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px;
  display: inline-block;
  border-radius: 5px;
  overflow: hidden;
`;

const CardGrid = styled.div`
  display: flex;
  overflow-x: auto; /* Cho phép cuộn ngang */
  gap: 10px; /* Khoảng cách giữa các thẻ */
  padding-bottom: 10px; /* Thêm padding để cuộn mượt hơn */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #222;
  }
`;

function MainContent() {
  return (
    <ContentContainer>
      <SectionTitle>Nghệ sĩ yêu thích</SectionTitle>
      <CardGrid>
        <Card>
          <img src="/images/artist1.jpg" alt="Artist 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/artist2.jpg" alt="Artist 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/artist3.jpg" alt="Artist 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/artist4.jpg" alt="Artist 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/artist5.jpg" alt="Artist 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        {/* Nhân đôi các nghệ sĩ */}
        <Card>
          <img src="/images/artist1.jpg" alt="Artist 1 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/artist2.jpg" alt="Artist 2 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/artist3.jpg" alt="Artist 3 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/artist4.jpg" alt="Artist 4 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/artist5.jpg" alt="Artist 5 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
      </CardGrid>
      <SectionTitle>Nhạc TOP 100</SectionTitle>
      <CardGrid>
        <Card>
          <img src="/images/top100-1.jpg" alt="Top 100 - 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/top100-2.jpg" alt="Top 100 - 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/top100-3.jpg" alt="Top 100 - 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/top100-4.jpg" alt="Top 100 - 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/top100-5.jpg" alt="Top 100 - 5" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        {/* Nhân đôi các bài nhạc TOP 100 */}
        <Card>
          <img src="/images/top100-1.jpg" alt="Top 100 - 1 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/top100-2.jpg" alt="Top 100 - 2 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/top100-3.jpg" alt="Top 100 - 3 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/top100-4.jpg" alt="Top 100 - 4 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
        <Card>
          <img src="/images/top100-5.jpg" alt="Top 100 - 5 (duplicate)" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Card>
      </CardGrid>
    </ContentContainer>
  );
}

export default MainContent;