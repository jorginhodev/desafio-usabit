import { Button } from '@/components'
import { useAnimatedUnmount } from '@/hooks'

import * as S from './styles'

type ModalProps = {
  danger?: boolean
  visible: boolean
  title: string
  children: React.ReactNode
  cancelLabel?: string
  confirmLabel?: string
  onCancel: () => void
  onConfirm: () => void
}

export function Modal({
  danger = false,
  visible,
  title,
  children,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
}: ModalProps) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible)

  if (!shouldRender) {
    return null
  }

  return (
    <>
      <S.Overlay isLeaving={!visible} ref={animatedElementRef}>
        <S.Container danger={danger} isLeaving={!visible}>
          <h1>{title}</h1>

          <div className="modal-body">{children}</div>

          <S.Footer>
            <Button variant="gray" onClick={onCancel}>
              {cancelLabel}
            </Button>
            <Button variant="danger" onClick={onConfirm}>
              {confirmLabel}
            </Button>
          </S.Footer>
        </S.Container>
      </S.Overlay>
    </>
  )
}
