import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, test, vi } from 'vitest';

afterEach(() => { cleanup(); });

export { describe, expect, fireEvent, render, screen, test, userEvent, vi };

