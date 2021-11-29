import { MyModuleManager } from 'modules/MyModule'
import { SomeData } from 'services/someData'

export const defaultSomeData: SomeData = {
  someField: 'foo',
}

MyModuleManager.displayName = 'MyModuleManager'
