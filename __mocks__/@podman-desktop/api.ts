import { vi } from 'vitest';

export const configuration = {
  getConfiguration: vi.fn(),
};

export const provider = {
  createProvider: vi.fn(),
};

export const commands = {
  registerCommand: vi.fn(),
};

export const containerEngine = {
  saveImage: vi.fn(),
};

export const process = {
  exec: vi.fn(),
};

export const window = {
  withProgress: vi.fn(),
  showInformationMessage: vi.fn(),
  showErrorMessage: vi.fn(),
};

export const env = {
  isMac: false,
  isWindows: false,
};

export const ProgressLocation = {
  TASK_WIDGET: 'TASK_WIDGET',
};
