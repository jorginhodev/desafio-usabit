import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '@/components'

import * as S from './styles'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <S.Container>
      <S.Text>Total de {totalCount} item(s)</S.Text>

      <S.PaginationGroup>
        <S.PageIndicator>
          Página {pageIndex + 1} de {pages}
        </S.PageIndicator>
        <S.ButtonGroup>
          <Button
            onClick={() => onPageChange(0)}
            variant="icon"
            disabled={pageIndex === 0}
          >
            <ChevronsLeft />
          </Button>
          <Button
            onClick={() => onPageChange(pageIndex - 1)}
            variant="icon"
            disabled={pageIndex === 0}
          >
            <ChevronLeft />
          </Button>

          <Button
            onClick={() => onPageChange(pageIndex + 1)}
            variant="icon"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronRight />
          </Button>
          <Button
            onClick={() => onPageChange(pages - 1)}
            variant="icon"
            disabled={pages <= pageIndex + 1}
          >
            <ChevronsRight />
          </Button>
        </S.ButtonGroup>
      </S.PaginationGroup>
    </S.Container>
  )
}
