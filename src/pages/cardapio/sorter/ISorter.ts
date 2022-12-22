import React from 'react';

export default interface Props {
  sorter: string;
  setSorter: React.Dispatch<React.SetStateAction<string>>;
}
