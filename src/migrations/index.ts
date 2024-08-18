import * as migration_20240818_081048 from './20240818_081048';
import * as migration_20240818_161627 from './20240818_161627';
import * as migration_20240818_162105 from './20240818_162105';

export const migrations = [
  {
    up: migration_20240818_081048.up,
    down: migration_20240818_081048.down,
    name: '20240818_081048',
  },
  {
    up: migration_20240818_161627.up,
    down: migration_20240818_161627.down,
    name: '20240818_161627',
  },
  {
    up: migration_20240818_162105.up,
    down: migration_20240818_162105.down,
    name: '20240818_162105'
  },
];
