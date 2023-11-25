import { useRouter } from 'next/router';
import { en, ptBR } from '@/languages';

export function useLanguage() {
  const { locale } = useRouter();

  return locale === 'en' ? en : ptBR;
}
