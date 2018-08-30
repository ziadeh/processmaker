import {InclusiveGateway} from "./InclusiveGateway"
import {ParallelGateway} from "./ParallelGateway"
import {ExclusiveGateway} from "./ExclusiveGateway"
import {IntermediateCatchEvent} from "./IntermediateCatchEvent"
import {IntermediateCatchEventEmptyDefinition} from "./IntermediateCatchEventEmptyDefinition"
import {IntermediateThrowEventEmptyDefinition} from "./IntermediateThrowEventEmptyDefinition"
import {MessageEventDefinition} from "./MessageEventDefinition"
import {TimerEventDefinition} from "./TimerEventDefinition"
import {EndEventMessageDefinition} from "./EndEventMessageDefinition"
import {StartEvent} from "./StartEvent"
import {EndEvent} from "./EndEvent"
import {DataObject} from "./DataObject"
import {DataStore} from "./DataStore"
import {Participant} from "./Participant"
import {Lane} from "./Lane"
import {Group} from "./Group"
import {BlackBoxPool} from "./BlackBoxPool"
import {CallActivity} from "./CallActivity"
import {Task} from "./Task"

export const JointElements = Object.assign({}, {
    InclusiveGateway,
    ParallelGateway,
    ExclusiveGateway,
    IntermediateCatchEvent,
    IntermediateCatchEventEmptyDefinition,
    IntermediateThrowEventEmptyDefinition,
    MessageEventDefinition,
    TimerEventDefinition,
    EndEventMessageDefinition,
    StartEvent,
    EndEvent,
    DataObject,
    DataStore,
    Participant,
    Lane,
    Group,
    BlackBoxPool,
    CallActivity,
    Task
})