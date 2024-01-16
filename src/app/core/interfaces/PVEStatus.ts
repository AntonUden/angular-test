export default interface PVEStatus {
  total: Total
  avarage_cpu_load: number
  nodes: Node[]
}

export interface Total {
  memory: StorageComponent
  disk: StorageComponent
  total_cpu_load: number
}

export interface StorageComponent {
  current: number
  max: number
}

export interface Node {
  name: string
  memory: StorageComponent
  disk: StorageComponent
  cpu: Cpu
  online: boolean
}

export interface Cpu {
  usage: number
}
