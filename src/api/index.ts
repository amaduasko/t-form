import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateEnd: any;
  DateTime: any;
  EMAIL: any;
  JSON: any;
  Mixed: any;
  StringInteger: any;
};

/**
 * Аккаунты
 * Banking -> Accounts -> Account Limit
 */
export type AccountLimit = {
  __typename?: 'AccountLimit';
  /** Получить Account */
  account?: Maybe<Accounts>;
  /** ID account */
  account_id?: Maybe<Scalars['ID']>;
  /** Сумма лимита */
  amount?: Maybe<Scalars['Float']>;
  /** Получить события лимита */
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  /** ID события лимита */
  commission_template_limit_action_type_id?: Maybe<Scalars['ID']>;
  /** Получить периоды лимита */
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  /** ID периода лимита */
  commission_template_limit_period_id?: Maybe<Scalars['ID']>;
  /** Получить направления лимита */
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  /** ID направления платежа */
  commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']>;
  /** Получить типы лимита */
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  /** Валюта */
  currency?: Maybe<Currencies>;
  /** ID валюты лимита */
  currency_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** количество срабатываний лимита */
  period_count?: Maybe<Scalars['Int']>;
};

/** A paginated list of AccountLimit items. */
export type AccountLimitPaginator = {
  __typename?: 'AccountLimitPaginator';
  /** A list of AccountLimit items. */
  data: Array<AccountLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * AccountReachedLimit
 * Banking -> Accounts -> Account Limit
 */
export type AccountReachedLimit = {
  __typename?: 'AccountReachedLimit';
  /** Получить Account */
  account?: Maybe<Accounts>;
  /** ID account */
  account_id: Scalars['ID'];
  /** Сумма */
  amount: Scalars['Float'];
  /** Имя аппликанта */
  client_name: Scalars['String'];
  /** Тип аппликанта */
  client_type: Scalars['String'];
  /** Тип */
  group_type: Scalars['String'];
  id: Scalars['ID'];
  /** Валюта лимита */
  limit_currency: Scalars['String'];
  /** Тип лимита */
  limit_type: Scalars['String'];
  /** Значение лимита */
  limit_value: Scalars['Int'];
  /** Период */
  period: Scalars['Int'];
  /** Тип трансфера */
  transfer_direction: Scalars['String'];
};

/** A paginated list of AccountReachedLimit items. */
export type AccountReachedLimitPaginator = {
  __typename?: 'AccountReachedLimitPaginator';
  /** A list of AccountReachedLimit items. */
  data: Array<AccountReachedLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AccountState = {
  __typename?: 'AccountState';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum AccountType {
  Business = 'Business',
  Private = 'Private'
}

/**
 * Аккаунты
 * Banking -> Accounts -> Accounts List
 */
export type Accounts = {
  __typename?: 'Accounts';
  /** Имя аккаунта */
  account_name: Scalars['String'];
  /** Номер аккаунта */
  account_number: Scalars['String'];
  /** Состояние аккаунта */
  account_state?: Maybe<AccountState>;
  /** Тип аккаунта */
  account_type?: Maybe<AccountType>;
  activated_at?: Maybe<Scalars['DateTime']>;
  /** Текущий баланс */
  available_balance: Scalars['Int'];
  /** Получить или индивидуала или компании */
  client?: Maybe<Client>;
  /** Получить связанный шаблон комиссии */
  commission_template_id?: Maybe<CommissionTemplate>;
  /** Компания которой принадлежит аккаунт */
  company?: Maybe<Companies>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** Получить связанный код валюты */
  currency?: Maybe<Currencies>;
  /** Текущий баланс */
  current_balance: Scalars['Int'];
  /** Получить тип группы */
  group?: Maybe<GroupType>;
  /** Получить групроле */
  group_role?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** Основной или нет */
  is_primary?: Maybe<Scalars['Boolean']>;
  /** Получить менеджера */
  member?: Maybe<Members>;
  /** Получить связанного владельца */
  owner?: Maybe<ApplicantIndividual>;
  /** Получить связанного платежного провайдера */
  payment_provider_id?: Maybe<PaymentProvider>;
  /** Получить связанного Пеймент систем */
  payment_system?: Maybe<PaymentSystem>;
  /** Текущий баланс */
  reserved_balance: Scalars['Int'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of Accounts items. */
export type AccountsPaginator = {
  __typename?: 'AccountsPaginator';
  /** A list of Accounts items. */
  data: Array<Accounts>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Дополнительные поля */
export type AdditionalFieldInput = {
  field_name?: InputMaybe<Scalars['String']>;
  field_type?: InputMaybe<FieldTypes>;
  field_value?: InputMaybe<Scalars['StringInteger']>;
};

/** Access for Online Banking */
export type ApplicantBankingAccess = {
  __typename?: 'ApplicantBankingAccess';
  /** Получить связанного applicant company */
  applicant_company?: Maybe<ApplicantCompany>;
  /** Получить связанного applicant individual */
  applicant_individual?: Maybe<ApplicantIndividual>;
  /** Может создать платеж */
  can_create_payment: Scalars['Boolean'];
  /** Может подписать платеж */
  can_sign_payment: Scalars['Boolean'];
  /** Contact administrator */
  contact_administrator: Scalars['Boolean'];
  /** Ежедневный лимит */
  daily_limit: Scalars['Float'];
  /** Использованный лимит */
  day_used_limit?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  /** Получить связанного Member */
  member?: Maybe<Members>;
  month_used_limit?: Maybe<Scalars['Float']>;
  /** Ежемесячный лимит */
  monthly_limit: Scalars['Float'];
  /** Лимит операций */
  operation_limit: Scalars['Float'];
};

/** A paginated list of ApplicantBankingAccess items. */
export type ApplicantBankingAccessPaginator = {
  __typename?: 'ApplicantBankingAccessPaginator';
  /** A list of ApplicantBankingAccess items. */
  data: Array<ApplicantBankingAccess>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Компания пользователя
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompany = {
  __typename?: 'ApplicantCompany';
  /** Адрес */
  address?: Maybe<Scalars['String']>;
  /** Адрес2 */
  address2?: Maybe<Scalars['String']>;
  /** Получить состояния */
  applicant_state?: Maybe<ApplicantState>;
  /** Получить тип бизнеса */
  business_type?: Maybe<ApplicantCompanyBusinessType>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Companies>;
  /** Дополнительные поля Company Info */
  company_info_additional_fields?: Maybe<Scalars['JSON']>;
  company_position?: Maybe<ApplicantIndividualCompany>;
  /** Тип компании */
  company_type?: Maybe<Scalars['String']>;
  /** Дополнительные поля блока контакты */
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить связанную страну */
  country?: Maybe<Country>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTime']>;
  /** email */
  email?: Maybe<Scalars['EMAIL']>;
  /** Дата окончания регистрации */
  expires_at?: Maybe<Scalars['Date']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** Верецифиорован телефон true/false */
  is_verification_phone?: Maybe<Scalars['Boolean']>;
  /** Получить KYC level */
  kyc_level?: Maybe<ApplicantRiskLevel>;
  /** Получить метки */
  labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
  /** Получить язык */
  language?: Maybe<Languages>;
  /** Номер лицензии */
  license_number?: Maybe<Scalars['String']>;
  /** Получить менеджера */
  manager?: Maybe<Members>;
  modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
  /** Название */
  name?: Maybe<Scalars['String']>;
  /** Получить заметки */
  notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
  /** Адрес офиса */
  office_address?: Maybe<Scalars['String']>;
  /** Получить создателя */
  owner?: Maybe<ApplicantIndividual>;
  owner_position?: Maybe<ApplicantIndividualCompany>;
  owner_relation?: Maybe<ApplicantIndividualCompany>;
  /** Телефон */
  phone?: Maybe<Scalars['String']>;
  /** Дополнительные поля Profile data */
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  /** Дата регистрации */
  reg_at?: Maybe<Scalars['Date']>;
  /** Регистрационный номер */
  reg_number?: Maybe<Scalars['String']>;
  /** Получить уровни рисков */
  risk_level?: Maybe<ApplicantRiskLevel>;
  /** Штат / область */
  state?: Maybe<Scalars['String']>;
  /** Получить причины */
  state_reason?: Maybe<ApplicantStateReason>;
  /** Получить статусы */
  status?: Maybe<ApplicantStatus>;
  /** Налоговый номер */
  tax?: Maybe<Scalars['String']>;
  /** Адрес сайта */
  url?: Maybe<Scalars['String']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']>;
};

/**
 * Типы бизнеса для компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompanyBusinessType = {
  __typename?: 'ApplicantCompanyBusinessType';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantCompanyBusinessType items. */
export type ApplicantCompanyBusinessTypePaginator = {
  __typename?: 'ApplicantCompanyBusinessTypePaginator';
  /** A list of ApplicantCompanyBusinessType items. */
  data: Array<ApplicantCompanyBusinessType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Метки компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompanyLabel = {
  __typename?: 'ApplicantCompanyLabel';
  /** HEX код метки */
  hex_color_code: Scalars['String'];
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название метки */
  name: Scalars['String'];
};

/** A paginated list of ApplicantCompanyLabel items. */
export type ApplicantCompanyLabelPaginator = {
  __typename?: 'ApplicantCompanyLabelPaginator';
  /** A list of ApplicantCompanyLabel items. */
  data: Array<ApplicantCompanyLabel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Модули компании
 * Dashboard -> Applicants -> Company -> Full Profile -> Settings
 */
export type ApplicantCompanyModules = {
  __typename?: 'ApplicantCompanyModules';
  /** Получить компанию */
  applicant_company?: Maybe<ApplicantCompany>;
  /** Получить модуль */
  applicant_module?: Maybe<ApplicantModules>;
  applicant_module_id?: Maybe<Scalars['ID']>;
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']>;
};

/** A paginated list of ApplicantCompanyModules items. */
export type ApplicantCompanyModulesPaginator = {
  __typename?: 'ApplicantCompanyModulesPaginator';
  /** A list of ApplicantCompanyModules items. */
  data: Array<ApplicantCompanyModules>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Заметки компания
 * Dashboard -> Applicants -> Company
 */
export type ApplicantCompanyNotes = {
  __typename?: 'ApplicantCompanyNotes';
  /** Получить пользователя */
  applicant?: Maybe<ApplicantCompany>;
  /** Получить автора */
  author?: Maybe<Members>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** Заметка */
  note: Scalars['String'];
};

/** A paginated list of ApplicantCompanyNotes items. */
export type ApplicantCompanyNotesPaginator = {
  __typename?: 'ApplicantCompanyNotesPaginator';
  /** A list of ApplicantCompanyNotes items. */
  data: Array<ApplicantCompanyNotes>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantCompany items. */
export type ApplicantCompanyPaginator = {
  __typename?: 'ApplicantCompanyPaginator';
  /** A list of ApplicantCompany items. */
  data: Array<ApplicantCompany>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Уровни риска компания
 * Dashboard -> Applicants -> Company
 */
export type ApplicantCompanyRiskLevel = {
  __typename?: 'ApplicantCompanyRiskLevel';
  /** Получить пользователя */
  applicant?: Maybe<ApplicantCompany>;
  /** Получить автора */
  author?: Maybe<Members>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Описание */
  description: Scalars['String'];
  id: Scalars['ID'];
};

/**
 * История уровней риска Applicant Company
 * Applicants -> Individual -> Individual Company Full Profile -> General
 */
export type ApplicantCompanyRiskLevelHistory = {
  __typename?: 'ApplicantCompanyRiskLevelHistory';
  /** Получить аппликанта */
  applicant_company?: Maybe<ApplicantCompany>;
  /** Комментарий */
  comment: Scalars['String'];
  /** Дата создания сообщения */
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** Получить владельца */
  manager?: Maybe<Members>;
  /** Получить уровень риска */
  risk_level?: Maybe<ApplicantRiskLevel>;
};

/** A paginated list of ApplicantCompanyRiskLevelHistory items. */
export type ApplicantCompanyRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantCompanyRiskLevelHistoryPaginator';
  /** A list of ApplicantCompanyRiskLevelHistory items. */
  data: Array<ApplicantCompanyRiskLevelHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantCompanyRiskLevel items. */
export type ApplicantCompanyRiskLevelPaginator = {
  __typename?: 'ApplicantCompanyRiskLevelPaginator';
  /** A list of ApplicantCompanyRiskLevel items. */
  data: Array<ApplicantCompanyRiskLevel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Частный пользователь
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantIndividual = {
  __typename?: 'ApplicantIndividual';
  /** Адрес */
  address?: Maybe<Scalars['String']>;
  /** Получить состояния */
  applicant_state?: Maybe<ApplicantState>;
  /** Дата рождения */
  birth_at?: Maybe<Scalars['Date']>;
  /** Город рождения */
  birth_city?: Maybe<Scalars['String']>;
  /** Получить связанную страну рождения */
  birth_country?: Maybe<Country>;
  /** Штат/область рождения */
  birth_state?: Maybe<Scalars['String']>;
  /** Получить связанную страну гражданства */
  citizenship_country?: Maybe<Country>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  /** Получить компании */
  companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  /** Дополнительные поля блока контакты */
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить связанную страну */
  country?: Maybe<Country>;
  /** Время создания */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Название компании держателя applicant */
  created_for?: Maybe<Companies>;
  /** email */
  email?: Maybe<Scalars['EMAIL']>;
  /** Имя */
  first_name?: Maybe<Scalars['String']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** Верецифиорован телефон true/false */
  is_verification_phone?: Maybe<Scalars['Boolean']>;
  /** Получить метки */
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  /** Получить язык */
  language?: Maybe<Languages>;
  /** Фамилия */
  last_name?: Maybe<Scalars['String']>;
  /** Получить менеджера */
  manager?: Maybe<Members>;
  /** Отчество */
  middle_name?: Maybe<Scalars['String']>;
  /** Получить модули */
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  /** Национальность */
  nationality?: Maybe<Scalars['String']>;
  /** Получить заметки */
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  /** Дополнительные поля для Personal info */
  personal_additional_fields?: Maybe<Scalars['JSON']>;
  /** Телефон */
  phone?: Maybe<Scalars['String']>;
  /** Дополнительные поля Profile data */
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  /** Получить уровни рисков */
  risk_level?: Maybe<ApplicantRiskLevel>;
  /** Пол */
  sex?: Maybe<Sex>;
  /** Штат / область */
  state?: Maybe<Scalars['String']>;
  /** Получить причины */
  state_reason?: Maybe<ApplicantStateReason>;
  /** Получить статусы */
  status?: Maybe<ApplicantStatus>;
  /** Получить two factor auth */
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  /** Адрес сайта */
  url?: Maybe<Scalars['String']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']>;
};

export type ApplicantIndividualCompany = {
  __typename?: 'ApplicantIndividualCompany';
  applicant_company_id: Scalars['ID'];
  applicant_individual?: Maybe<ApplicantIndividual>;
  applicant_individual_company_position_id: Scalars['ID'];
  applicant_individual_company_relation_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
  relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
};

/** A paginated list of ApplicantIndividualCompany items. */
export type ApplicantIndividualCompanyPaginator = {
  __typename?: 'ApplicantIndividualCompanyPaginator';
  /** A list of ApplicantIndividualCompany items. */
  data: Array<ApplicantIndividualCompany>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Должности компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantIndividualCompanyPosition = {
  __typename?: 'ApplicantIndividualCompanyPosition';
  id: Scalars['ID'];
  /** Название должности */
  name: Scalars['String'];
};

/** A paginated list of ApplicantIndividualCompanyPosition items. */
export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  /** A list of ApplicantIndividualCompanyPosition items. */
  data: Array<ApplicantIndividualCompanyPosition>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Отношения компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantIndividualCompanyRelation = {
  __typename?: 'ApplicantIndividualCompanyRelation';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantIndividualCompanyRelation items. */
export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  /** A list of ApplicantIndividualCompanyRelation items. */
  data: Array<ApplicantIndividualCompanyRelation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Метки пользователя
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantIndividualLabel = {
  __typename?: 'ApplicantIndividualLabel';
  /** HEX код метки */
  hex_color_code: Scalars['String'];
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название метки */
  name: Scalars['String'];
};

/** A paginated list of ApplicantIndividualLabel items. */
export type ApplicantIndividualLabelPaginator = {
  __typename?: 'ApplicantIndividualLabelPaginator';
  /** A list of ApplicantIndividualLabel items. */
  data: Array<ApplicantIndividualLabel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Модули аппликанта
 * Dashboard -> Applicants -> Individual -> Full Profile -> Settings
 */
export type ApplicantIndividualModules = {
  __typename?: 'ApplicantIndividualModules';
  /** Получить индивидуала */
  applicant_individual?: Maybe<ApplicantIndividual>;
  /** Получить модуль */
  applicant_module?: Maybe<ApplicantModules>;
  applicant_module_id?: Maybe<Scalars['ID']>;
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']>;
};

/** A paginated list of ApplicantIndividualModules items. */
export type ApplicantIndividualModulesPaginator = {
  __typename?: 'ApplicantIndividualModulesPaginator';
  /** A list of ApplicantIndividualModules items. */
  data: Array<ApplicantIndividualModules>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Заметки частный пользователь
 * Dashboard -> Applicants -> Individual
 */
export type ApplicantIndividualNotes = {
  __typename?: 'ApplicantIndividualNotes';
  /** Получить пользователя */
  applicant?: Maybe<ApplicantIndividual>;
  /** Получить автора */
  author?: Maybe<Members>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** Заметка */
  note: Scalars['String'];
};

/** A paginated list of ApplicantIndividualNotes items. */
export type ApplicantIndividualNotesPaginator = {
  __typename?: 'ApplicantIndividualNotesPaginator';
  /** A list of ApplicantIndividualNotes items. */
  data: Array<ApplicantIndividualNotes>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantIndividual items. */
export type ApplicantIndividualPaginator = {
  __typename?: 'ApplicantIndividualPaginator';
  /** A list of ApplicantIndividual items. */
  data: Array<ApplicantIndividual>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Уровни риска пользователя
 * Dashboard -> Applicants -> Individual
 */
export type ApplicantIndividualRiskLevel = {
  __typename?: 'ApplicantIndividualRiskLevel';
  /** Получить пользователя */
  applicant?: Maybe<ApplicantIndividual>;
  /** Получить автора */
  author?: Maybe<Members>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Описание */
  description: Scalars['String'];
  id: Scalars['ID'];
};

/** A paginated list of ApplicantIndividualRiskLevel items. */
export type ApplicantIndividualRiskLevelPaginator = {
  __typename?: 'ApplicantIndividualRiskLevelPaginator';
  /** A list of ApplicantIndividualRiskLevel items. */
  data: Array<ApplicantIndividualRiskLevel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Уровни KYC
 * Management -> New Applicant
 */
export type ApplicantKycLevel = {
  __typename?: 'ApplicantKycLevel';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantKycLevel items. */
export type ApplicantKycLevelPaginator = {
  __typename?: 'ApplicantKycLevelPaginator';
  /** A list of ApplicantKycLevel items. */
  data: Array<ApplicantKycLevel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Управление модулями
 * Dashboard -> Applicants -> Company->Full Profile -> Settings
 */
export type ApplicantModules = {
  __typename?: 'ApplicantModules';
  id: Scalars['ID'];
  /** Название модуля */
  name: Scalars['String'];
};

/** A paginated list of ApplicantModules items. */
export type ApplicantModulesPaginator = {
  __typename?: 'ApplicantModulesPaginator';
  /** A list of ApplicantModules items. */
  data: Array<ApplicantModules>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Уровни риска
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantRiskLevel = {
  __typename?: 'ApplicantRiskLevel';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/**
 * История уровней риска Applicant Individual
 * Applicants -> Individual -> Individual Full Profile -> General
 */
export type ApplicantRiskLevelHistory = {
  __typename?: 'ApplicantRiskLevelHistory';
  /** Получить аппликанта */
  applicant?: Maybe<ApplicantIndividual>;
  /** Комментарий */
  comment: Scalars['String'];
  /** Дата создания сообщения */
  created_at?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** Получить владельца */
  manager?: Maybe<Members>;
  /** Получить уровень риска */
  risk_level?: Maybe<ApplicantRiskLevel>;
};

/** A paginated list of ApplicantRiskLevelHistory items. */
export type ApplicantRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantRiskLevelHistoryPaginator';
  /** A list of ApplicantRiskLevelHistory items. */
  data: Array<ApplicantRiskLevelHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantRiskLevel items. */
export type ApplicantRiskLevelPaginator = {
  __typename?: 'ApplicantRiskLevelPaginator';
  /** A list of ApplicantRiskLevel items. */
  data: Array<ApplicantRiskLevel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Состояния
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantState = {
  __typename?: 'ApplicantState';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantState items. */
export type ApplicantStatePaginator = {
  __typename?: 'ApplicantStatePaginator';
  /** A list of ApplicantState items. */
  data: Array<ApplicantState>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * State reason
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantStateReason = {
  __typename?: 'ApplicantStateReason';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantStateReason items. */
export type ApplicantStateReasonPaginator = {
  __typename?: 'ApplicantStateReasonPaginator';
  /** A list of ApplicantStateReason items. */
  data: Array<ApplicantStateReason>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Статусы
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantStatus = {
  __typename?: 'ApplicantStatus';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of ApplicantStatus items. */
export type ApplicantStatusPaginator = {
  __typename?: 'ApplicantStatusPaginator';
  /** A list of ApplicantStatus items. */
  data: Array<ApplicantStatus>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Business Activity
 * Banking -> Commission Templates -> Template Settings
 */
export type BusinessActivity = {
  __typename?: 'BusinessActivity';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of BusinessActivity items. */
export type BusinessActivityPaginator = {
  __typename?: 'BusinessActivityPaginator';
  /** A list of BusinessActivity items. */
  data: Array<BusinessActivity>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Client = ApplicantCompany | ApplicantIndividual;

/** Client ip address */
export type ClientIpAddress = {
  __typename?: 'ClientIpAddress';
  /** Client ID */
  client_id?: Maybe<Scalars['ID']>;
  /** Client type */
  client_type?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** ip_address */
  ip_address?: Maybe<Scalars['String']>;
};

export enum ClientType {
  Administration = 'Administration',
  Client = 'Client'
}

export type Clientable = ApplicantCompany | ApplicantIndividual | Members;

/**
 * Прайс лист комиссий
 * Banking -> Commission Price List
 */
export type CommissionPriceList = {
  __typename?: 'CommissionPriceList';
  /** Получить связанный аккаунт */
  account?: Maybe<Accounts>;
  /** Получить связанный платежный шаблон */
  commission_template?: Maybe<CommissionTemplate>;
  /** Получить компанию */
  company?: Maybe<Array<Maybe<ApplicantCompany>>>;
  /** Получить связанные цены */
  fees?: Maybe<Array<Maybe<PriceListFee>>>;
  id: Scalars['ID'];
  /** Название шаблона */
  name: Scalars['String'];
  /** Получить связанного мембера */
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  /** Получить связанную платежную систему */
  payment_system?: Maybe<PaymentSystem>;
  /** Получить связанный платежный провайдер */
  provider?: Maybe<PaymentProvider>;
};

/** A paginated list of CommissionPriceList items. */
export type CommissionPriceListPaginator = {
  __typename?: 'CommissionPriceListPaginator';
  /** A list of CommissionPriceList items. */
  data: Array<CommissionPriceList>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Шаблоны комиссий
 * Banking -> Commission Templates -> Template List
 */
export type CommissionTemplate = {
  __typename?: 'CommissionTemplate';
  /** Получить связанный аккаунт */
  account?: Maybe<Accounts>;
  /** Получить список бизнесов */
  business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
  commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
  /** Получить компанию */
  company?: Maybe<Array<Maybe<ApplicantCompany>>>;
  countries?: Maybe<Array<Maybe<Country>>>;
  /** массив ID стран */
  country_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  /** массив ID валют */
  currency_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Описание шаблона */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Активен или нет */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название шаблона */
  name: Scalars['String'];
  /** Получить связанного мембера */
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  /** Получить связанный платежный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
};

/**
 * Лимиты комиссий
 * Banking -> Commission Templates -> Template List
 */
export type CommissionTemplateLimit = {
  __typename?: 'CommissionTemplateLimit';
  /** Сумма лимита */
  amount?: Maybe<Scalars['Float']>;
  /** Получить шаблон комиссии */
  commission_template?: Maybe<CommissionTemplate>;
  /** Получить события лимита */
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  /** ID события лимита */
  commission_template_limit_action_type_id?: Maybe<Scalars['ID']>;
  /** Получить периоды лимита */
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  /** ID периода лимита */
  commission_template_limit_period_id?: Maybe<Scalars['ID']>;
  /** Получить направления лимита */
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  /** ID направления платежа */
  commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']>;
  /** Получить типы лимита */
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  /** ID типа лимита */
  commission_template_limit_type_id?: Maybe<Scalars['ID']>;
  /** Валюта */
  currency?: Maybe<Currencies>;
  /** ID валюты лимита */
  currency_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** количество срабатываний лимита */
  period_count?: Maybe<Scalars['Int']>;
};

/**
 * Типы событий шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitActionType = {
  __typename?: 'CommissionTemplateLimitActionType';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of CommissionTemplateLimitActionType items. */
export type CommissionTemplateLimitActionTypePaginator = {
  __typename?: 'CommissionTemplateLimitActionTypePaginator';
  /** A list of CommissionTemplateLimitActionType items. */
  data: Array<CommissionTemplateLimitActionType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of CommissionTemplateLimit items. */
export type CommissionTemplateLimitPaginator = {
  __typename?: 'CommissionTemplateLimitPaginator';
  /** A list of CommissionTemplateLimit items. */
  data: Array<CommissionTemplateLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Периоды шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitPeriod = {
  __typename?: 'CommissionTemplateLimitPeriod';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of CommissionTemplateLimitPeriod items. */
export type CommissionTemplateLimitPeriodPaginator = {
  __typename?: 'CommissionTemplateLimitPeriodPaginator';
  /** A list of CommissionTemplateLimitPeriod items. */
  data: Array<CommissionTemplateLimitPeriod>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Направления переводов лимитов шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitTransferDirection = {
  __typename?: 'CommissionTemplateLimitTransferDirection';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of CommissionTemplateLimitTransferDirection items. */
export type CommissionTemplateLimitTransferDirectionPaginator = {
  __typename?: 'CommissionTemplateLimitTransferDirectionPaginator';
  /** A list of CommissionTemplateLimitTransferDirection items. */
  data: Array<CommissionTemplateLimitTransferDirection>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Типы лимитов шаблонов
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitType = {
  __typename?: 'CommissionTemplateLimitType';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** A paginated list of CommissionTemplateLimitType items. */
export type CommissionTemplateLimitTypePaginator = {
  __typename?: 'CommissionTemplateLimitTypePaginator';
  /** A list of CommissionTemplateLimitType items. */
  data: Array<CommissionTemplateLimitType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of CommissionTemplate items. */
export type CommissionTemplatePaginator = {
  __typename?: 'CommissionTemplatePaginator';
  /** A list of CommissionTemplate items. */
  data: Array<CommissionTemplate>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Компания
 * Administration->Company Info
 * error codes: 500, 400
 */
export type Companies = {
  __typename?: 'Companies';
  /** Дополнительные поля */
  additional_fields?: Maybe<Scalars['JSON']>;
  /** Адресс */
  address?: Maybe<Scalars['String']>;
  /** Город */
  city?: Maybe<Scalars['String']>;
  /** Регистрационный номер компании */
  company_number?: Maybe<Scalars['String']>;
  /** Получить настройки компании */
  company_settings?: Maybe<CompanySettings>;
  /** Контактное лицо */
  contact_name?: Maybe<Scalars['String']>;
  /** Страна */
  country?: Maybe<Country>;
  created_at: Scalars['DateTime'];
  /** Департаменты компании */
  departments?: Maybe<Array<Maybe<Departments>>>;
  /** E-mail компании */
  email: Scalars['EMAIL'];
  id: Scalars['ID'];
  /** Участники компании */
  members?: Maybe<Array<Maybe<Members>>>;
  /** Количество участников в компании */
  members_count?: Maybe<Scalars['Int']>;
  /** Название компании */
  name: Scalars['String'];
  /** Должности компании */
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
  updated_at: Scalars['DateTime'];
  /** URL компании */
  url?: Maybe<Scalars['String']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']>;
};

/** A paginated list of Companies items. */
export type CompaniesPaginator = {
  __typename?: 'CompaniesPaginator';
  /** A list of Companies items. */
  data: Array<Companies>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Настройки компании
 * Administration->Company Info->Full Profile->Branding
 */
export type CompanySettings = {
  __typename?: 'CompanySettings';
  /** Данные о компании */
  company?: Maybe<Companies>;
  company_id?: Maybe<Scalars['ID']>;
  /** Email отправителя */
  email_from?: Maybe<Scalars['EMAIL']>;
  /** Email для jwt */
  email_jwt?: Maybe<Scalars['String']>;
  /** URL в тексте письма */
  email_url?: Maybe<Scalars['String']>;
  /** ID файла логотипа из хранилища */
  logo_object_key?: Maybe<Scalars['String']>;
  /** Показывать или нет лого */
  show_own_logo?: Maybe<Scalars['Boolean']>;
};

/** Страна */
export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  /** 3х значный ISO код */
  iso: Scalars['String'];
  /** Название страны */
  name: Scalars['String'];
};

/** A paginated list of Country items. */
export type CountryPaginator = {
  __typename?: 'CountryPaginator';
  /** A list of Country items. */
  data: Array<Country>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Валюты */
export type Currencies = {
  __typename?: 'Currencies';
  /** ISO код валюты */
  code: Scalars['String'];
  id: Scalars['ID'];
  /** Количество знаков после запятой */
  minor_unit?: Maybe<Scalars['Int']>;
  /** Название валюты */
  name: Scalars['String'];
};

/** A paginated list of Currencies items. */
export type CurrenciesPaginator = {
  __typename?: 'CurrenciesPaginator';
  /** A list of Currencies items. */
  data: Array<Currencies>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type DateRange = {
  from: Scalars['Date'];
  to: Scalars['DateEnd'];
};

/** Должности */
export type DepartmentPosition = {
  __typename?: 'DepartmentPosition';
  /** Получить компанию */
  company?: Maybe<Companies>;
  /** Получить департамент */
  department?: Maybe<Departments>;
  id: Scalars['ID'];
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Назварие должности */
  name: Scalars['String'];
};

/** A paginated list of DepartmentPosition items. */
export type DepartmentPositionPaginator = {
  __typename?: 'DepartmentPositionPaginator';
  /** A list of DepartmentPosition items. */
  data: Array<DepartmentPosition>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Департаменты
 * Administration->Company Info->Full Profile->Departments
 */
export type Departments = {
  __typename?: 'Departments';
  /** Получить компанию */
  company?: Maybe<Companies>;
  id: Scalars['ID'];
  /** Название департамента */
  name: Scalars['String'];
  /** Получить должность */
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

/** A paginated list of Departments items. */
export type DepartmentsPaginator = {
  __typename?: 'DepartmentsPaginator';
  /** A list of Departments items. */
  data: Array<Departments>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Notifications
 */
export type EmailNotification = {
  __typename?: 'EmailNotification';
  /** Получить клиента ApplicantIndividual | ApplicantCompany | Members */
  clientable?: Maybe<Clientable>;
  /** Получить компанию */
  company?: Maybe<Companies>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** Получить Group Role */
  group_role?: Maybe<GroupRole>;
  /** Тип Группы */
  group_type?: Maybe<GroupType>;
  id: Scalars['ID'];
  /** Тип получателя */
  recipient_type?: Maybe<RecipientType>;
  /** Получить templates */
  templates?: Maybe<Array<Maybe<EmailTemplate>>>;
  /** Тип */
  type?: Maybe<NotifyType>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of EmailNotification items. */
export type EmailNotificationPaginator = {
  __typename?: 'EmailNotificationPaginator';
  /** A list of EmailNotification items. */
  data: Array<EmailNotification>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Templates Settings
 */
export type EmailSmtp = {
  __typename?: 'EmailSmtp';
  /** Получить компанию */
  company?: Maybe<Companies>;
  /** почта */
  from_email?: Maybe<Scalars['String']>;
  /** От кого */
  from_name?: Maybe<Scalars['String']>;
  /** Имя хоста */
  host_name: Scalars['String'];
  id: Scalars['ID'];
  /** Определяем отправлять через данные настройки всю почту или нет */
  is_sending_mail?: Maybe<Scalars['Boolean']>;
  /** Получить мембера */
  member?: Maybe<Members>;
  /** Название шаблона */
  name?: Maybe<Scalars['String']>;
  /** пароль */
  password: Scalars['String'];
  /** Порт */
  port: Scalars['Int'];
  /** ответить кому */
  replay_to?: Maybe<Scalars['String']>;
  /** Защита */
  security?: Maybe<Securities>;
  /** логин */
  username: Scalars['String'];
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Templates Settings
 */
export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  /** Получить Компанию */
  company?: Maybe<Companies>;
  /** Контент */
  content: Scalars['String'];
  created_at?: Maybe<Scalars['DateTime']>;
  /** Footer */
  footer?: Maybe<Scalars['String']>;
  /** Header */
  header?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
  /** Тип сервиса */
  service_type: ServiceType;
  /** Тема */
  subject: Scalars['String'];
  /** Тип */
  type: ClientType;
  updated_at?: Maybe<Scalars['DateTime']>;
  use_layout?: Maybe<Scalars['Boolean']>;
};

export type EmailTemplateLayout = {
  __typename?: 'EmailTemplateLayout';
  /** Ид компании */
  company_id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  /** Footer */
  footer: Scalars['String'];
  /** Header */
  header: Scalars['String'];
  id: Scalars['ID'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of EmailTemplate items. */
export type EmailTemplatePaginator = {
  __typename?: 'EmailTemplatePaginator';
  /** A list of EmailTemplate items. */
  data: Array<EmailTemplate>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Fee = {
  currency?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fee?: InputMaybe<Scalars['StringInteger']>;
  fee_from?: InputMaybe<Scalars['StringInteger']>;
  fee_to?: InputMaybe<Scalars['StringInteger']>;
  mode?: InputMaybe<FeeMode>;
};

export enum FeeMode {
  Fix = 'Fix',
  Percent = 'Percent',
  Range = 'Range'
}

/** Периоды комиссий */
export type FeePeriod = {
  __typename?: 'FeePeriod';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** Типы платежей */
export type FeeType = {
  __typename?: 'FeeType';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** Режимы комиссий */
export type FeesMode = {
  __typename?: 'FeesMode';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** Типы полей */
export enum FieldTypes {
  /** ID страны */
  CountryList = 'CountryList',
  /** Тип поля строка */
  Text = 'Text',
  /** Тип поля текстовое поле */
  TextArea = 'TextArea'
}

/** Файлы */
export type Files = {
  __typename?: 'Files';
  /** Кто загружал файл */
  author_id: Scalars['Int'];
  created_at?: Maybe<Scalars['DateTime']>;
  /** Тип сущности для которой загружается файл */
  entity_type: Scalars['String'];
  /** Исходное имя файла */
  file_name: Scalars['String'];
  id: Scalars['ID'];
  /** Ссылка на файл */
  link: Scalars['String'];
  /** Тип файла */
  mime_type: Scalars['String'];
  /** Размер загружаемого файла */
  size: Scalars['Int'];
  /** Название файла на ovh */
  storage_name: Scalars['String'];
  /** Путь к загруженному файлу на ovh */
  storage_path: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of Files items. */
export type FilesPaginator = {
  __typename?: 'FilesPaginator';
  /** A list of Files items. */
  data: Array<Files>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type GroupRole = {
  __typename?: 'GroupRole';
  /** Получит свящанный шаблон комиссий */
  commission_template?: Maybe<CommissionTemplate>;
  company?: Maybe<Companies>;
  /** Описание группы */
  description?: Maybe<Scalars['String']>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** ID типа группы */
  group_type_id?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** Активная и не активная группа */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название группы */
  name?: Maybe<Scalars['String']>;
  /** Получить связанный платежный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанную роль */
  role?: Maybe<Role>;
  /** ID роли */
  role_id?: Maybe<Scalars['ID']>;
};

/** A paginated list of GroupRole items. */
export type GroupRolePaginator = {
  __typename?: 'GroupRolePaginator';
  /** A list of GroupRole items. */
  data: Array<GroupRole>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Группы */
export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['ID'];
  /** Название группы */
  name: GroupsEntities;
};

export enum GroupTypeMode {
  All = 'ALL',
  Clients = 'CLIENTS'
}

export type Groups = {
  __typename?: 'Groups';
  /** @deprecated No longer supported */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID'];
  /** Название группы */
  name: GroupsEntities;
};

/**
 * Список групп
 * Settings->Manager Groups->Groups List
 */
export enum GroupsEntities {
  Company = 'Company',
  Individual = 'Individual',
  Member = 'Member'
}

export type InputAccount = {
  /** Имя аккаунта */
  account_name: Scalars['String'];
  /** Номер аккаунта */
  account_number?: InputMaybe<Scalars['String']>;
  /** Состояние аккаунта */
  account_state_id: Scalars['ID'];
  /** Тип аккаунта */
  account_type?: InputMaybe<AccountType>;
  /** ID аппликанта */
  client_id: Scalars['ID'];
  /** ID шаблона комиссии */
  commission_template_id: Scalars['ID'];
  /** ID компании */
  company_id: Scalars['ID'];
  /** ID валюты */
  currency_id: Scalars['ID'];
  /** ID групроле */
  group_role_id: Scalars['ID'];
  /** ID группы */
  group_type_id: Scalars['ID'];
  /** Основной или нет */
  is_primary?: InputMaybe<Scalars['Boolean']>;
  /** ID владельца */
  owner_id: Scalars['ID'];
  /** ID провайдера */
  payment_provider_id: Scalars['ID'];
  /** ID платежной системы */
  payment_system_id: Scalars['ID'];
};

/** Языки */
export type Languages = {
  __typename?: 'Languages';
  id: Scalars['ID'];
  /** ISO код языка */
  iso: Scalars['String'];
  /** Язык */
  name: Scalars['String'];
};

/** A paginated list of Languages items. */
export type LanguagesPaginator = {
  __typename?: 'LanguagesPaginator';
  /** A list of Languages items. */
  data: Array<Languages>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Участники
 * Administration->Members->MemberAccessLimitation
 */
export type MemberAccessLimitation = {
  __typename?: 'MemberAccessLimitation';
  /** Получить связанный платежный шаблон */
  commission_template?: Maybe<CommissionTemplate>;
  /** Получить GroupType */
  group?: Maybe<GroupType>;
  /** Получить groupRole */
  group_role?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** Получить Group */
  member?: Maybe<Members>;
  /** Получить связанный платежный провайдер */
  provider?: Maybe<PaymentProvider>;
};

/** A paginated list of MemberAccessLimitation items. */
export type MemberAccessLimitationPaginator = {
  __typename?: 'MemberAccessLimitationPaginator';
  /** A list of MemberAccessLimitation items. */
  data: Array<MemberAccessLimitation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Участники
 * Administration->Members
 */
export type Members = {
  __typename?: 'Members';
  /** Access limitation groups */
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  /** Дополнительны поля */
  additional_fields?: Maybe<Scalars['JSON']>;
  /** Дополнительны поля для member info */
  additional_info_fields?: Maybe<Scalars['JSON']>;
  /** Member Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']>;
  /** получить компанию участника */
  company: Companies;
  /** ID компании */
  company_id?: Maybe<Scalars['ID']>;
  /** получить страну участника */
  country?: Maybe<Country>;
  /** Получить департамент */
  department?: Maybe<Departments>;
  /** Email участника */
  email?: Maybe<Scalars['EMAIL']>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']>;
  /** Получить группу участника */
  group?: Maybe<GroupRole>;
  id: Scalars['ID'];
  /** Member ip address */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** Активен = true или не активный = false участник */
  is_active?: Maybe<Scalars['Boolean']>;
  /** если true видит только своих аппликантов */
  is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
  /** Подписывать или нет транзакцию */
  is_sign_transaction?: Maybe<Scalars['Boolean']>;
  /** Получить язык участника */
  language?: Maybe<Languages>;
  /** Последняя авторизация */
  last_login_at?: Maybe<Scalars['DateTime']>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']>;
  /** Получить должность */
  position?: Maybe<DepartmentPosition>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']>;
  /** Пол участника */
  sex?: Maybe<Sex>;
  /** ID настройки двухфактороной авторизации */
  two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
  /** Получить настройки двухфакторной авторизации */
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

export enum MembersColumn {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  IsShowOwnerApplicants = 'IS_SHOW_OWNER_APPLICANTS',
  LastLoginAt = 'LAST_LOGIN_AT',
  PositionId = 'POSITION_ID'
}

/** A paginated list of Members items. */
export type MembersPaginator = {
  __typename?: 'MembersPaginator';
  /** A list of Members items. */
  data: Array<Members>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Создать метку компании */
  attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  /** Создать метку аппликанту */
  attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  /** Создать аккаунт */
  createAccount?: Maybe<Accounts>;
  /** Создать лимит */
  createAccountLimit?: Maybe<AccountLimit>;
  /** Создать applicant company */
  createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Создать applicant company */
  createApplicantCompany?: Maybe<ApplicantCompany>;
  /** Создать бизнес тип */
  createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  /** Создать метку */
  createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Создать модуль компании */
  createApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Создать заметку */
  createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /** Создать уровень риска */
  createApplicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  /** Добавить запись */
  createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  /** Создать частного пользователя */
  createApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Добавить связь Individual с Company */
  createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Создать должность */
  createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /** Создать отношение */
  createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /** Создать метку */
  createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Создать модуль аппликанта */
  createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Создать заметку */
  createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /** Создать уровень риска */
  createApplicantIndividualRiskLevel?: Maybe<ApplicantIndividualRiskLevel>;
  /** Создать модуль */
  createApplicantModule?: Maybe<ApplicantModules>;
  /** Добавить запись */
  createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  /** Создать причину */
  createApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Создание Business Activity */
  createBusinessActivity?: Maybe<BusinessActivity>;
  /** Создать прай лист */
  createCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Создание шаблона комиссий */
  createCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Создать лимит */
  createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Создать компанию */
  createCompany?: Maybe<Companies>;
  /** Добавить настройки к компании */
  createCompanySettings?: Maybe<CompanySettings>;
  /** Создать департамент */
  createDepartment?: Maybe<Departments>;
  /** Создание должности */
  createDepartmentPosition?: Maybe<DepartmentPosition>;
  /** Создать электронную почту */
  createEmailNotification?: Maybe<EmailNotification>;
  /** Создать смтп */
  createEmailSmtp?: Maybe<EmailSmtp>;
  /** Создать электронную почту */
  createEmailTemplate?: Maybe<EmailTemplate>;
  /** Создать электронную почту */
  createEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Создать группу */
  createGroupSettings?: Maybe<GroupRole>;
  /** Создать участника */
  createMember?: Maybe<Members>;
  /** Создать ограничение доступа */
  createMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Создать платеж */
  createPayment?: Maybe<Payments>;
  /** Создать платежный провайдер */
  createPaymentProvider?: Maybe<PaymentProvider>;
  /** Создать платежную систему */
  createPaymentSystem?: Maybe<PaymentSystem>;
  /** Создать Цен */
  createPriceListFees?: Maybe<PriceListFee>;
  /** Создать реквизиты */
  createRequisites?: Maybe<Requisites>;
  createRole?: Maybe<Role>;
  /** Создать компанию */
  createTicket?: Maybe<Ticket>;
  /** Создать комментарии */
  createTicketComment?: Maybe<TicketComments>;
  /** Удалить аккаунт */
  deleteAccount?: Maybe<Accounts>;
  /** Удалить лимит */
  deleteAccountLimit?: Maybe<AccountLimit>;
  /** Удалить пользователя */
  deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Удалить пользователя */
  deleteApplicantCompany?: Maybe<ApplicantCompany>;
  /** Удалит метку */
  deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Удалить модуль */
  deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Удалит заметку */
  deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /** Удалит заметку */
  deleteApplicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  /** Удалить запись */
  deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  /** Удалит пользователя */
  deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Удалить связь Individual с Company */
  deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Удалить метку */
  deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Удалить модуль */
  deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Удалит заметку */
  deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /** Удалит заметку */
  deleteApplicantIndividualRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  /** Удалить запись */
  deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  /** Удалит метку */
  deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Удалить прайс лист */
  deleteCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Удалить шаблон */
  deleteCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Удалить лимит */
  deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Удалит компанию */
  deleteCompany?: Maybe<Companies>;
  /** Удалить департамент */
  deleteDepartment?: Maybe<Departments>;
  /** Удалить должность */
  deleteDepartmentPosition?: Maybe<DepartmentPosition>;
  /** Удалить запись */
  deleteEmailNotification?: Maybe<EmailNotification>;
  /** Удалить запись */
  deleteEmailSmtp: Array<EmailSmtp>;
  /** Удалить запись */
  deleteEmailTemplate?: Maybe<EmailTemplate>;
  /** Удалить запись */
  deleteEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Удалить файл */
  deleteFile?: Maybe<Files>;
  /** Удаление группы */
  deleteGroup?: Maybe<GroupRole>;
  /** Удалить участника */
  deleteMember?: Maybe<Members>;
  /** Удалить ограничение доступа */
  deleteMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Удалить платеж */
  deletePayment?: Maybe<Payments>;
  /** Удалить платежный провайдер */
  deletePaymentProvider?: Maybe<PaymentProvider>;
  /** Удалить платежную систему */
  deletePaymentSystem?: Maybe<PaymentSystem>;
  /** Удалить Цен */
  deletePriceListFees?: Maybe<PriceListFee>;
  /** Удалить реквизиты */
  deleteRequisites?: Maybe<Requisites>;
  deleteRole?: Maybe<Role>;
  /** Удалить метку */
  detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  /** Удалить метку */
  detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  /** Создать аккаунт */
  generateIban?: Maybe<Accounts>;
  /** Пригласить участника */
  inviteMember?: Maybe<Members>;
  sendEmail?: Maybe<StatusType>;
  sendEmailWithTemplate?: Maybe<StatusType>;
  /** Установить пароль */
  setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
  /** Добавить группу мемберу */
  setMemberGroup?: Maybe<GroupRole>;
  /** Установить пароль участника */
  setMemberPassword?: Maybe<Members>;
  /** Установить PIN участнику */
  setMemberSecurityPin?: Maybe<Members>;
  /** Редактирование аккаунта */
  updateAccount?: Maybe<Accounts>;
  /** Обновить лимит */
  updateAccountLimit?: Maybe<AccountLimit>;
  /** Редактирование applicant company */
  updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Редактирование applicant company */
  updateApplicantCompany?: Maybe<ApplicantCompany>;
  /** Редактирование отнощения */
  updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  /** Редактирование метки */
  updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Активировать модуль applicant company */
  updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Редактирование частного пользователя */
  updateApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Редактировать связь Individual с Company */
  updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Редактирование должности */
  updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /** Редактирование отнощения */
  updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /** Редактирование метки */
  updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Активировать или деактивировать модуль аппликанту */
  updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Редактирование причины */
  updateApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Изменение Business Activity */
  updateBusinessActivity?: Maybe<BusinessActivity>;
  /** Редактирование частного пользователя */
  updateCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Обновление полей шаблона комиссий */
  updateCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Обновить лимит */
  updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Обновить данные компании */
  updateCompany?: Maybe<Companies>;
  /** Обновление настроек компании */
  updateCompanySettings?: Maybe<CompanySettings>;
  /** Изменить название департамента */
  updateDepartment?: Maybe<Departments>;
  /** Обновить данные компании */
  updateEmailNotification?: Maybe<EmailNotification>;
  /** Обновить данные смтп */
  updateEmailSmtp?: Maybe<EmailSmtp>;
  /** Обновить данные компании */
  updateEmailTemplate?: Maybe<EmailTemplate>;
  /** Обновить данные компании */
  updateEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Обновить поля группы */
  updateGroupSettings?: Maybe<GroupRole>;
  /** Обновить поля участника */
  updateMember?: Maybe<Members>;
  /** Обновить ограничение доступа */
  updateMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Редактировать платеж */
  updatePayment?: Maybe<Payments>;
  /** Обновить поля платежного провайдера */
  updatePaymentProvider?: Maybe<PaymentProvider>;
  /** Обновить поля платежной системы */
  updatePaymentSystem?: Maybe<PaymentSystem>;
  /** Обновить данные Цен */
  updatePriceListFees?: Maybe<PriceListFee>;
  /** Редактировать реквизиты */
  updateRequisites?: Maybe<Requisites>;
  updateRole?: Maybe<Role>;
  /** Обновить данные компании */
  updateTicket?: Maybe<Ticket>;
};


export type MutationAttachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationAttachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateAccountArgs = {
  input: InputAccount;
};


export type MutationCreateAccountLimitArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Float'];
  commission_template_limit_action_type_id: Scalars['ID'];
  commission_template_limit_period_id: Scalars['ID'];
  commission_template_limit_transfer_direction_id: Scalars['ID'];
  commission_template_limit_type_id: Scalars['ID'];
  currency_id?: InputMaybe<Scalars['ID']>;
  period_count?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  can_create_payment: Scalars['Boolean'];
  can_sign_payment: Scalars['Boolean'];
  contact_administrator: Scalars['Boolean'];
  daily_limit: Scalars['Float'];
  member_id: Scalars['ID'];
  monthly_limit: Scalars['Float'];
  operation_limit: Scalars['Float'];
  used_limit?: InputMaybe<Scalars['Float']>;
};


export type MutationCreateApplicantCompanyArgs = {
  account_manager_member_id: Scalars['ID'];
  address: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id: Scalars['ID'];
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  applicant_status_id?: InputMaybe<Scalars['ID']>;
  city: Scalars['String'];
  company_id: Scalars['ID'];
  company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  expires_at: Scalars['Date'];
  group_id?: InputMaybe<Scalars['ID']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  license_number?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  office_address?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['ID']>;
  owner_position_id: Scalars['ID'];
  owner_relation_id: Scalars['ID'];
  phone: Scalars['String'];
  reg_at?: InputMaybe<Scalars['Date']>;
  reg_number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantCompanyBusinessTypeArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantCompanyLabelArgs = {
  hex_color_code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateApplicantCompanyNoteArgs = {
  applicant_company_id: Scalars['ID'];
  member_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantCompanyRiskLevelArgs = {
  applicant_company_id: Scalars['ID'];
  description: Scalars['String'];
  member_id: Scalars['ID'];
};


export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID'];
  comment: Scalars['String'];
  risk_level_id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualArgs = {
  account_manager_member_id: Scalars['ID'];
  address: Scalars['String'];
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id: Scalars['ID'];
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  applicant_status_id?: InputMaybe<Scalars['ID']>;
  birth_at: Scalars['Date'];
  birth_city?: InputMaybe<Scalars['String']>;
  birth_country_id: Scalars['ID'];
  birth_state?: InputMaybe<Scalars['String']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']>;
  city: Scalars['String'];
  company_id: Scalars['ID'];
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id?: InputMaybe<Scalars['ID']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name: Scalars['String'];
  middle_name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
  personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  phone: Scalars['String'];
  sex: Sex;
  state?: InputMaybe<Scalars['String']>;
  two_factor_auth_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_company_position_id: Scalars['ID'];
  applicant_individual_company_relation_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualCompanyPositionArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualCompanyRelationArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualLabelArgs = {
  hex_color_code: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateApplicantIndividualNoteArgs = {
  applicant_individual_id: Scalars['ID'];
  member_id: Scalars['ID'];
  note: Scalars['String'];
};


export type MutationCreateApplicantIndividualRiskLevelArgs = {
  applicant_individual_id: Scalars['ID'];
  description: Scalars['String'];
  member_id: Scalars['ID'];
};


export type MutationCreateApplicantModuleArgs = {
  name: Scalars['String'];
};


export type MutationCreateApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID'];
  comment: Scalars['String'];
  risk_level_id: Scalars['ID'];
};


export type MutationCreateApplicantStateReasonArgs = {
  name: Scalars['String'];
};


export type MutationCreateBusinessActivityArgs = {
  name: Scalars['String'];
};


export type MutationCreateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID'];
  name: Scalars['String'];
  payment_system_id: Scalars['ID'];
  provider_id: Scalars['ID'];
};


export type MutationCreateCommissionTemplateArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  payment_provider_id: Scalars['ID'];
};


export type MutationCreateCommissionTemplateLimitArgs = {
  amount: Scalars['Float'];
  commission_template_id: Scalars['ID'];
  commission_template_limit_action_type_id: Scalars['ID'];
  commission_template_limit_period_id: Scalars['ID'];
  commission_template_limit_transfer_direction_id: Scalars['ID'];
  commission_template_limit_type_id: Scalars['ID'];
  currency_id?: InputMaybe<Scalars['ID']>;
  period_count?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateCompanyArgs = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company_number?: InputMaybe<Scalars['String']>;
  contact_name?: InputMaybe<Scalars['String']>;
  country_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  name: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCompanySettingsArgs = {
  company_id: Scalars['Int'];
  email_from?: InputMaybe<Scalars['EMAIL']>;
  email_jwt?: InputMaybe<Scalars['String']>;
  email_url?: InputMaybe<Scalars['String']>;
  show_own_logo?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateDepartmentArgs = {
  company_id: Scalars['ID'];
  department_positions_name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
};


export type MutationCreateDepartmentPositionArgs = {
  company_id: Scalars['ID'];
  department_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};


export type MutationCreateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']>;
  company_id: Scalars['ID'];
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  templates: Array<InputMaybe<Scalars['Int']>>;
};


export type MutationCreateEmailSmtpArgs = {
  company_id: Scalars['ID'];
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name: Scalars['String'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String'];
};


export type MutationCreateEmailTemplateArgs = {
  company_id: Scalars['ID'];
  content: Scalars['String'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  service_type: ServiceType;
  subject: Scalars['String'];
  type: ClientType;
  use_layout: Scalars['Boolean'];
};


export type MutationCreateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int'];
  footer: Scalars['String'];
  header: Scalars['String'];
};


export type MutationCreateGroupSettingsArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateMemberArgs = {
  company_id: Scalars['ID'];
  country_id?: InputMaybe<Scalars['ID']>;
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id: Scalars['ID'];
};


export type MutationCreateMemberAccessLimitationArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  group_role_id: Scalars['ID'];
  member_id: Scalars['ID'];
};


export type MutationCreatePaymentArgs = {
  account_id: Scalars['ID'];
  amount: Scalars['Float'];
  amount_real?: InputMaybe<Scalars['Float']>;
  company_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  currency_id: Scalars['ID'];
  error?: InputMaybe<Scalars['String']>;
  fee?: InputMaybe<Scalars['Float']>;
  fee_type_id: Scalars['ID'];
  operation_type_id: Scalars['ID'];
  owner_id: Scalars['ID'];
  payment_details: Scalars['String'];
  payment_number: Scalars['String'];
  payment_provider_id: Scalars['ID'];
  received_at?: InputMaybe<Scalars['DateTime']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_bank_account: Scalars['String'];
  sender_bank_address: Scalars['String'];
  sender_bank_country: Scalars['ID'];
  sender_bank_name: Scalars['String'];
  sender_country_id?: InputMaybe<Scalars['ID']>;
  sender_name: Scalars['String'];
  sender_swift: Scalars['String'];
  status_id: Scalars['ID'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
  urgency_id: Scalars['ID'];
};


export type MutationCreatePaymentProviderArgs = {
  description?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  logo_key?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreatePaymentSystemArgs = {
  countries?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  providers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreatePriceListFeesArgs = {
  fee?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Fee>>>>>;
  name?: InputMaybe<Scalars['String']>;
  operation_type_id?: InputMaybe<Scalars['Int']>;
  period_id?: InputMaybe<Scalars['Int']>;
  price_list_id: Scalars['Int'];
  type_id?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateRequisitesArgs = {
  account_id: Scalars['ID'];
  account_no: Scalars['String'];
  address: Scalars['String'];
  bank_address: Scalars['String'];
  bank_correspondent?: InputMaybe<Scalars['JSON']>;
  bank_country_id: Scalars['ID'];
  bank_name: Scalars['String'];
  country_id: Scalars['ID'];
  created_at?: InputMaybe<Scalars['DateTime']>;
  iban: Scalars['String'];
  recipient: Scalars['String'];
  registration_number: Scalars['Int'];
  swift: Scalars['String'];
  updated_at?: InputMaybe<Scalars['DateTime']>;
};


export type MutationCreateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateTicketArgs = {
  client_id: Scalars['ID'];
  company_id: Scalars['ID'];
  message: Scalars['String'];
  status?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type MutationCreateTicketCommentArgs = {
  client_id: Scalars['ID'];
  message: Scalars['String'];
  ticket_id: Scalars['ID'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAccountLimitArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantBankingAccessArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantCompanyNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyRiskLevelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantIndividualNoteArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualRiskLevelArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantRiskLevelHistoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteApplicantStateReasonArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionPriceListArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommissionTemplateLimitArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteDepartmentPositionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailNotificationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailSmtpArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmailTemplateLayoutArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberAccessLimitationArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentProviderArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentSystemArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePriceListFeesArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRequisitesArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDetachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDetachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationGenerateIbanArgs = {
  id: Scalars['ID'];
};


export type MutationInviteMemberArgs = {
  company_id: Scalars['ID'];
  email: Scalars['EMAIL'];
  first_name: Scalars['String'];
  group_id: Scalars['ID'];
  last_name: Scalars['String'];
  two_factor_auth_setting_id: Scalars['ID'];
};


export type MutationSendEmailArgs = {
  email: Scalars['String'];
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['Int'];
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String'];
};


export type MutationSendEmailWithTemplateArgs = {
  company_id: Scalars['ID'];
  content?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
};


export type MutationSetApplicantIndividualPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetMemberGroupArgs = {
  commission_template_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  payment_provider_id: Scalars['ID'];
  role_id: Scalars['ID'];
};


export type MutationSetMemberPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  password_confirmation: Scalars['String'];
};


export type MutationSetMemberSecurityPinArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAccountArgs = {
  id: Scalars['ID'];
  input: InputAccount;
};


export type MutationUpdateAccountLimitArgs = {
  amount?: InputMaybe<Scalars['Float']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  period_count?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_id: Scalars['ID'];
  can_create_payment: Scalars['Boolean'];
  can_sign_payment: Scalars['Boolean'];
  contact_administrator: Scalars['Boolean'];
  daily_limit: Scalars['Float'];
  id: Scalars['ID'];
  member_id: Scalars['ID'];
  monthly_limit: Scalars['Float'];
  operation_limit: Scalars['Float'];
  used_limit?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateApplicantCompanyArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id?: InputMaybe<Scalars['ID']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  applicant_status_id?: InputMaybe<Scalars['ID']>;
  city?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  expires_at?: InputMaybe<Scalars['Date']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_verification_phone?: InputMaybe<Scalars['Boolean']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  license_number?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  office_address?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['ID']>;
  owner_position_id?: InputMaybe<Scalars['ID']>;
  owner_relation_id?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  reg_at?: InputMaybe<Scalars['Date']>;
  reg_number?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  tax?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateApplicantIndividualArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']>;
  address?: InputMaybe<Scalars['String']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
  applicant_state_id?: InputMaybe<Scalars['ID']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
  applicant_status_id?: InputMaybe<Scalars['ID']>;
  birth_at?: InputMaybe<Scalars['Date']>;
  birth_city?: InputMaybe<Scalars['String']>;
  birth_country_id?: InputMaybe<Scalars['ID']>;
  birth_state?: InputMaybe<Scalars['String']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']>;
  city?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  is_verification_phone?: InputMaybe<Scalars['Boolean']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  password_confirmation?: InputMaybe<Scalars['String']>;
  personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  phone?: InputMaybe<Scalars['String']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  sex?: InputMaybe<Sex>;
  state?: InputMaybe<Scalars['String']>;
  two_factor_auth_id?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID'];
  applicant_individual_company_position_id?: InputMaybe<Scalars['ID']>;
  applicant_individual_company_relation_id?: InputMaybe<Scalars['ID']>;
  applicant_individual_id: Scalars['ID'];
};


export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID'];
  applicant_module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateApplicantStateReasonArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateBusinessActivityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationUpdateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  payment_system_id: Scalars['ID'];
  provider_id: Scalars['ID'];
};


export type MutationUpdateCommissionTemplateArgs = {
  business_activity?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  commission_template_limit_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  country_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateCommissionTemplateLimitArgs = {
  amount?: InputMaybe<Scalars['Float']>;
  commission_template_id: Scalars['ID'];
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  period_count?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateCompanyArgs = {
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  company_number?: InputMaybe<Scalars['String']>;
  contact_name?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCompanySettingsArgs = {
  company_id: Scalars['ID'];
  email_from?: InputMaybe<Scalars['EMAIL']>;
  email_jwt?: InputMaybe<Scalars['String']>;
  email_url?: InputMaybe<Scalars['String']>;
  show_own_logo?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateDepartmentArgs = {
  active_department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
};


export type MutationUpdateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['ID']>;
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
  id: Scalars['ID'];
  templates?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationUpdateEmailSmtpArgs = {
  from_email?: InputMaybe<Scalars['String']>;
  from_name?: InputMaybe<Scalars['String']>;
  host_name?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['Int']>;
  replay_to?: InputMaybe<Scalars['String']>;
  security?: InputMaybe<Securities>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateEmailTemplateArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  content?: InputMaybe<Scalars['String']>;
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  service_type?: InputMaybe<ServiceType>;
  subject?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ClientType>;
  use_layout?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int'];
  footer?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type MutationUpdateGroupSettingsArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id: Scalars['ID'];
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  role_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMemberArgs = {
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_info_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_id?: InputMaybe<Scalars['ID']>;
  country_id?: InputMaybe<Scalars['ID']>;
  department_position?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['EMAIL']>;
  first_name?: InputMaybe<Scalars['String']>;
  group_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  ip_address?: InputMaybe<Scalars['String']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']>;
  language_id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateMemberAccessLimitationArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  group_role_id: Scalars['ID'];
  member_id: Scalars['ID'];
};


export type MutationUpdatePaymentArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
  amount?: InputMaybe<Scalars['Float']>;
  company_id?: InputMaybe<Scalars['ID']>;
  currency?: InputMaybe<Scalars['ID']>;
  fee?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
  operation_type_id: Scalars['ID'];
  payment_details?: InputMaybe<Scalars['String']>;
  payment_number?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  sender_address?: InputMaybe<Scalars['String']>;
  sender_bank_account?: InputMaybe<Scalars['String']>;
  sender_bank_address?: InputMaybe<Scalars['String']>;
  sender_bank_country?: InputMaybe<Scalars['ID']>;
  sender_bank_name?: InputMaybe<Scalars['String']>;
  sender_country?: InputMaybe<Scalars['ID']>;
  sender_name?: InputMaybe<Scalars['String']>;
  sender_swift?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['Int']>;
  urgency_id: Scalars['ID'];
};


export type MutationUpdatePaymentProviderArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  logo_key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdatePaymentSystemArgs = {
  countries?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: Scalars['ID'];
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  providers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdatePriceListFeesArgs = {
  fee?: InputMaybe<Array<InputMaybe<Array<InputMaybe<Fee>>>>>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  operation_type_id?: InputMaybe<Scalars['Int']>;
  period_id?: InputMaybe<Scalars['Int']>;
  type_id?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateRequisitesArgs = {
  account_id?: InputMaybe<Scalars['ID']>;
  account_no?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  bank_address?: InputMaybe<Scalars['String']>;
  bank_correspondent?: InputMaybe<Scalars['JSON']>;
  bank_country_id?: InputMaybe<Scalars['ID']>;
  bank_name?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  iban?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  recipient?: InputMaybe<Scalars['String']>;
  registration_number?: InputMaybe<Scalars['Int']>;
  swift?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};


export type MutationUpdateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['ID'];
  status: Scalars['Int'];
};

export enum NotifyType {
  Administration = 'Administration',
  Client = 'Client'
}

/** Типы операций */
export type OperationType = {
  __typename?: 'OperationType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

/**
 * Платежные провайдеры
 * Banking -> Payment Providers
 */
export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  commission_price_list?: Maybe<CommissionPriceList>;
  /** Описание провайдера */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Активен или нет */
  is_active?: Maybe<Scalars['Boolean']>;
  /** ключ для получения изображения в Object Storage */
  logo_key?: Maybe<Scalars['String']>;
  /** Название провайдера */
  name: Scalars['String'];
  /** Получить связанные платежные системы */
  payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
};

/** A paginated list of PaymentProvider items. */
export type PaymentProviderPaginator = {
  __typename?: 'PaymentProviderPaginator';
  /** A list of PaymentProvider items. */
  data: Array<PaymentProvider>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Типы платежей */
export type PaymentStatus = {
  __typename?: 'PaymentStatus';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/**
 * Платежные системы
 * Settings->Payment System
 */
export type PaymentSystem = {
  __typename?: 'PaymentSystem';
  /** Получить связанные страны */
  countries?: Maybe<Array<Maybe<Country>>>;
  /** Получить связанные валюты */
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  id: Scalars['ID'];
  /** Активна или нет */
  is_active?: Maybe<Scalars['Boolean']>;
  /** Название платежной системы */
  name: Scalars['String'];
  /** Получить Платежные провайдеры */
  providers?: Maybe<Array<Maybe<PaymentProvider>>>;
};

/** A paginated list of PaymentSystem items. */
export type PaymentSystemPaginator = {
  __typename?: 'PaymentSystemPaginator';
  /** A list of PaymentSystem items. */
  data: Array<PaymentSystem>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Типы платежей */
export type PaymentTypes = {
  __typename?: 'PaymentTypes';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/** Срочность */
export type PaymentUrgency = {
  __typename?: 'PaymentUrgency';
  id: Scalars['ID'];
  /** Название */
  name: Scalars['String'];
};

/**
 * Платежи
 * Banking -> Payments List
 */
export type Payments = {
  __typename?: 'Payments';
  /** Получить связанный аккаунт */
  account?: Maybe<Accounts>;
  /** Сумма */
  amount: Scalars['Float'];
  amount_real: Scalars['Float'];
  /** Получить связанную компанию */
  company?: Maybe<Companies>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** Получить связанную валюту */
  currency?: Maybe<Currencies>;
  error?: Maybe<Scalars['String']>;
  /** Комиссия */
  fee?: Maybe<Scalars['Float']>;
  fee_type?: Maybe<FeeType>;
  id: Scalars['ID'];
  /** Получить связанного мембера */
  member?: Maybe<Members>;
  /** Получить владельца */
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  /** Детали платежа */
  payment_details?: Maybe<Scalars['String']>;
  /** Номер платежа */
  payment_number?: Maybe<Scalars['String']>;
  /** Получить связанный тип */
  payment_operation_type?: Maybe<OperationType>;
  /** Получить связанный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанныую срочность */
  payment_urgency?: Maybe<PaymentUrgency>;
  received_at?: Maybe<Scalars['DateTime']>;
  sender_additional_fields?: Maybe<Scalars['JSON']>;
  /** Адрес отправителя */
  sender_address?: Maybe<Scalars['String']>;
  /** Аккаунт банка отправителя */
  sender_bank_account?: Maybe<Scalars['String']>;
  /** Адрес банка отправителя */
  sender_bank_address?: Maybe<Scalars['String']>;
  /** Страна банка отправителя */
  sender_bank_country?: Maybe<Country>;
  /** Имя банка отправителя */
  sender_bank_name?: Maybe<Scalars['String']>;
  /** Страна отправителя */
  sender_country_id?: Maybe<Country>;
  /** Имя отправителя */
  sender_name?: Maybe<Scalars['String']>;
  /** SWIFT отправителя */
  sender_swift?: Maybe<Scalars['String']>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of Payments items. */
export type PaymentsPaginator = {
  __typename?: 'PaymentsPaginator';
  /** A list of Payments items. */
  data: Array<Payments>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type PermissionCategory = {
  __typename?: 'PermissionCategory';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};


export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

/** Allowed column names for PermissionCategory.permissionList.permissionType. */
export enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = 'TYPE'
}

/** Dynamic WHERE conditions for the `permissionType` argument on the query `permissionList`. */
export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `permissionType` argument on the query `permissionList`. */
export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type PermissionCategoryRole = {
  __typename?: 'PermissionCategoryRole';
  is_all_companies?: Maybe<Scalars['Boolean']>;
  permission_category_id?: Maybe<Scalars['ID']>;
  role_id?: Maybe<Scalars['ID']>;
};

export type PermissionList = {
  __typename?: 'PermissionList';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  separator?: Maybe<PermissionSeparatorType>;
  type?: Maybe<PermissionListType>;
};

export enum PermissionListType {
  Individual = 'Individual',
  Member = 'Member'
}

export enum PermissionSeparatorType {
  Business = 'Business',
  Private = 'Private'
}

/**
 * Список разрешений
 * Settings->Manager Roles->Rol
 */
export type Permissions = {
  __typename?: 'Permissions';
  all?: Maybe<Scalars['JSON']>;
  display_name?: Maybe<Scalars['String']>;
  guard_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/**
 * Цены прайс листа
 * Banking -> Цены прайс листа
 */
export type PriceListFee = {
  __typename?: 'PriceListFee';
  created_at?: Maybe<Scalars['DateTime']>;
  /** Тип */
  fee_type?: Maybe<FeeType>;
  /** Цены */
  fees_item?: Maybe<Array<Maybe<PriceListFeesItem>>>;
  id: Scalars['ID'];
  /** Получить Прайс лист комиссий */
  list?: Maybe<CommissionPriceList>;
  /** Название */
  name: Scalars['String'];
  /** Тип операции */
  operation_type?: Maybe<OperationType>;
  /** Период */
  period?: Maybe<FeePeriod>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PriceListFeesItem = {
  __typename?: 'PriceListFeesItem';
  fee_item?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  /** Получить аккаунт по ID */
  account?: Maybe<Accounts>;
  /** Получить лимит по ID */
  accountLimit?: Maybe<AccountLimit>;
  /** Получить список лимитов */
  accountLimits?: Maybe<AccountLimitPaginator>;
  /** Получить лимит по ID */
  accountReachedLimit?: Maybe<AccountReachedLimit>;
  /** Получить список лимитов */
  accountReachedLimits?: Maybe<AccountReachedLimitPaginator>;
  /** Получить список account states */
  accountStates: Array<AccountState>;
  /**
   * Получить список аккаунтов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  accounts?: Maybe<AccountsPaginator>;
  /**
   * Получить список пользователей
   * orderBy: [{ column: APPLICANT_INDIVIDUAL_ID, order: DESC }] сортировка по ID, по имени, фамилии, email
   * where:{column: APPLICANT_INDIVIDUAL_ID, value: ""} фильтр по applicant_individual_id
   */
  applicantBankingAccess?: Maybe<ApplicantBankingAccessPaginator>;
  /**
   * Получить список applicant companies
   * orderBy: [{ column: FIRST_NAME, order: DESC }] сортировка по ID, по имени, фамилии, email
   * where:{column: EMAIL, operator: LIKE, value: ""} фильтр по имени, фамилии, Email
   */
  applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
  /** Получить пользователя  по ID */
  applicantCompany?: Maybe<ApplicantCompany>;
  /**
   * Получить все типы бизнеса
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessTypePaginator>;
  /** Получить метку по ID */
  applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /**
   * Получить все метки
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantCompanyLabels: Array<ApplicantCompanyLabel>;
  applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
  /**
   * Получить список всех модулей компании
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  applicantCompanyModules?: Maybe<ApplicantCompanyModulesPaginator>;
  /** Получить заметку  по ID */
  applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /**
   * Получить список всех заметок
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по ID, по времени создания
   */
  applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
  /** Получить уровень риска по ID */
  applicantCompanyRiskLevel?: Maybe<ApplicantCompanyRiskLevel>;
  /**
   * Получить историю списка уровней риска по аппликанту
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_id, operator: LIKE, value: ""} фильтр по аппликанту
   */
  applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
  /**
   * Получить список всех уровней рисков
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по ID, по времени создания
   */
  applicantCompanyRiskLevels?: Maybe<ApplicantCompanyRiskLevelPaginator>;
  /** Получить пользователя  по ID */
  applicantIndividual?: Maybe<ApplicantIndividual>;
  /** Получить должность по ID */
  applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /**
   * Получить все  должности
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  /** Получить по ID */
  applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /**
   * Получить все  отношения
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
  /** Получить метку по ID */
  applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /**
   * Получить все метки
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualLabels: Array<ApplicantIndividualLabel>;
  applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
  /**
   * Получить список всех модулей аппликанта
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  applicantIndividualModules?: Maybe<ApplicantIndividualModulesPaginator>;
  /** Получить заметку  по ID */
  applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /**
   * Получить список всех заметок
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по ID, по времени создания
   */
  applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
  /** Получить уровень риска по ID */
  applicantIndividualRiskLevel?: Maybe<ApplicantIndividualRiskLevel>;
  /**
   * Получить список всех уровней рисков
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по ID, по времени создания
   */
  applicantIndividualRiskLevels?: Maybe<ApplicantIndividualRiskLevelPaginator>;
  /**
   * Получить список частных пользователей
   * orderBy: [{ column: FIRST_NAME, order: DESC }] сортировка по ID, по имени, фамилии, email
   * where:{column: EMAIL, operator: LIKE, value: ""} фильтр по имени, фамилии, Email
   */
  applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
  /** Получить уровень KYC по  ID */
  applicantKycLevel?: Maybe<ApplicantKycLevel>;
  /**
   * Получить список уровней KYC
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
  /** Получить уровень риска по  ID */
  applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
  /**
   * Получить историю списка уровней риска по аппликанту
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_id, operator: LIKE, value: ""} фильтр по аппликанту
   */
  applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
  /**
   * Получить список уровней риска
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
  /** Получить состояние по ID */
  applicantState?: Maybe<ApplicantState>;
  /** Получить причину по ID */
  applicantStateReason?: Maybe<ApplicantStateReason>;
  /**
   * Получить все причины
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
  /**
   * Получить все состояния
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStates?: Maybe<ApplicantStatePaginator>;
  /** Получить статутс по ID */
  applicantStatus?: Maybe<ApplicantStatus>;
  /**
   * Получить все статусы
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStatuses?: Maybe<ApplicantStatusPaginator>;
  /** Получить модуль по ID */
  applicant_module?: Maybe<ApplicantModules>;
  /**
   * Получить список модулей
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  applicant_modules?: Maybe<ApplicantModulesPaginator>;
  /** Получить список всех бизнесов */
  businessActivities?: Maybe<BusinessActivityPaginator>;
  /** Получить по ID */
  businessActivity?: Maybe<BusinessActivity>;
  /** Получить список клиентов */
  clientList: Array<Client>;
  /** Получить прайс по ID */
  commissionPriceList?: Maybe<CommissionPriceList>;
  /**
   * Получить список прайсов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
  /** Получить шаблон по ID */
  commissionTemplate?: Maybe<CommissionTemplate>;
  /** Получить лимит по ID */
  commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Получить список типов лимитов */
  commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionTypePaginator>;
  /** Получить по ID */
  commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
  /** Получить список типов лимитов */
  commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
  /** Получить по ID */
  commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
  /** Получить список направлений */
  commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
  /** Получить по ID */
  commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
  /** Получить список типов лимитов */
  commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
  /** Получить список лимитов */
  commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
  /**
   * Получить список шаблонов
   * orderBy: [{ column: ID, order: DESC }] сортировка ID, NAME, IS_ACTIVE
   * where:{column: NAME, operator: EQ, value: ""} фильтр по name
   * hasPaymentProvider: {column:NAME,operator:GTE,value:PaymentProviderName} фильтр по провайдеру системам
   * hasBusinessActivity: {column:NAME,operator:GTE,value:BusinessActivityName} фильтр по бизнесу
   * hasOwner: {column:NAME,operator:GTE,value:MemberName} фильтр по владельцу
   * hasAccount: {column:NAME,operator:GTE,value:AccountName} фильтр по имени аккаунта
   * hasCompany: {column:NAME,operator:GTE,value:CompanyName} фильтр по имени компании
   */
  commissionTemplates?: Maybe<CommissionTemplatePaginator>;
  /**
   * Получить список компаний
   * member_count: сортировка по количеству участников компании
   * county: сортировка по  стране
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по дате создания, по ID, по названию, email, url
   * created_at: {from:"2021-10-11", to: "2021-10-12"} фильтр по дате
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию, по email , url
   */
  companies?: Maybe<CompaniesPaginator>;
  /** Получить компанию по ID */
  company?: Maybe<Companies>;
  /** Получить настройки компании по ID компании */
  companySettings?: Maybe<CompanySettings>;
  /** Получить список стран */
  countries?: Maybe<CountryPaginator>;
  country?: Maybe<Country>;
  /** Получить список валют */
  currencies?: Maybe<CurrenciesPaginator>;
  /** Получить валюту по ID */
  currency?: Maybe<Currencies>;
  /** Получить департамент по его ID */
  department?: Maybe<Departments>;
  /** Получить должность по ID */
  departmentPosition?: Maybe<DepartmentPosition>;
  /**
   * Получить список должностей
   * orderBy: [{ column: ID, order: DESC }] сортировка по названию, по ID, по is_active
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию, по полю is_active
   * hasDepartment: {column:ID,operator:EQ,value:1} фильтр по id департамента
   */
  departmentPositions?: Maybe<DepartmentPositionPaginator>;
  /**
   * Получить список департаментов
   * orderBy: [{ column: ID, order: DESC }] сортировка по названию или по ID
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   * hasCompany: {column:ID,operator:EQ,value:1} фильтр по id компании
   */
  departments?: Maybe<DepartmentsPaginator>;
  /** Получить email notification */
  emailNotification?: Maybe<EmailNotification>;
  /**
   * Получить список email notification
   * orderBy: [
   * {column: ID, order: DESC},
   * ] сортировка по ID
   * where:{column: TYPE, operator: EQ, value: ""} фильтр по типу нотификаций
   */
  emailNotifications?: Maybe<EmailNotificationPaginator>;
  /** Получить по smtp setting по ID */
  emailSmtp?: Maybe<EmailSmtp>;
  /** Получить список smtp настроек для компании */
  emailSmtps: Array<EmailSmtp>;
  /** Получить по билет ID */
  emailTemplate?: Maybe<EmailTemplate>;
  /** Получить по билет ID */
  emailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /**
   * Получить список билетов
   * orderBy: [
   * {column: ID, order: DESC},
   * ] сортировка по ID
   * where:{column: SUBJECT, operator: LIKE, value: ""} фильтр по имени
   */
  emailTemplates?: Maybe<EmailTemplatePaginator>;
  /** Получить список  периодов комиссий */
  feePeriods: Array<FeePeriod>;
  /** Получить список статусов */
  feeTypes: Array<FeeType>;
  /** Получить список режимов */
  feesModes: Array<FeesMode>;
  /** Получить файл по ID */
  file?: Maybe<Files>;
  /**
   * Получить список файлов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  files?: Maybe<FilesPaginator>;
  /**
   * Получить список applicant individuals по applicant company
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_company_id, operator: LIKE, value: ""} фильтр по applicant_company_id
   */
  getMatchedUsers?: Maybe<ApplicantIndividualCompanyPaginator>;
  /** Получить список */
  getPaymentTypes: Array<PaymentTypes>;
  /** Получить список */
  getPaymentUrgencys: Array<PaymentUrgency>;
  /** Получить список */
  getTicketComments: Array<TicketComments>;
  groupList?: Maybe<GroupRolePaginator>;
  /** Получить группу по ID */
  group_type?: Maybe<GroupType>;
  /** Получить список типов групп */
  group_types: Array<GroupType>;
  /**
   * Получить список групп с ролями
   * orderBy: [{ column: IS_ACTIVE, order: DESC }] сортировка по ID, статусу, описанию
   * where:{column: ID, operator: EQ, value: ""} фильтр по ID, ID группы, ID роли, ID платежного провайдера, ID шаблона комиссий, по статусу
   * @deprecated No longer supported
   */
  groups?: Maybe<GroupRolePaginator>;
  /** Получить язык по ID */
  language?: Maybe<Languages>;
  /** Получить список языков */
  languages?: Maybe<LanguagesPaginator>;
  /** Получить участника по ID */
  member?: Maybe<Members>;
  /** Получить участника по ID */
  memberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /**
   * Получить список участников
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   * hasPosition: {column: GROUP_ROLE_ID, operator:EQ, value: 8} поиск по id GROUP ROLE
   */
  memberAccessLimitations?: Maybe<MemberAccessLimitationPaginator>;
  /**
   * Получить список участников
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   * hasPosition: {column: DEPARTMENT_ID, operator:EQ, value: 8} поиск по id департамента
   */
  members?: Maybe<MembersPaginator>;
  /** Получить список типов операций */
  operationTypes: Array<OperationType>;
  /** Вывод списка овнеров для компаний */
  owners: Array<ApplicantIndividual>;
  /** Получить платеж по ID */
  payment?: Maybe<Payments>;
  /** Получить провайдер по ID */
  paymentProvider?: Maybe<PaymentProvider>;
  /**
   * Получить список провайдеров
   * paymentProviderCountry: country_id - получить все провайдеры по стране
   * paymentProviderCurrency: currency_id - получить все провайдеры по валюте
   * orderBy: [{ column: ID, order: DESC }] сортировка ID, NAME, IS_ACTIVE
   * where:{column: NAME, operator: EQ, value: ""} фильтр по name
   * hasPaymentSystems: {column:NAME,operator:GTE,value:PaymentSystemName} фильтр по платежным системам
   */
  paymentProviders?: Maybe<PaymentProviderPaginator>;
  /** Получить список статусов */
  paymentStatuses: Array<PaymentStatus>;
  /** Получить платежную систем по ID */
  paymentSystem?: Maybe<PaymentSystem>;
  /** Получить список платежных систем */
  paymentSystems?: Maybe<PaymentSystemPaginator>;
  /**
   * Получить список платежей
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * Фильтры по
   * hasCompany: {column:NAME,operator:GTE,value:CompanyName} фильтр по имени компании
   * hasAccounts: {column:ACCOUNT_ID,operator:GTE,value:AccountNumber} фильтр по account number
   * hasOwner: {column:NAME,operator:GTE,value:MemberName} фильтр по владельцу
   */
  payments?: Maybe<PaymentsPaginator>;
  /** Получить разрешение по ID */
  permission?: Maybe<Permissions>;
  permissions?: Maybe<Array<Maybe<PermissionCategory>>>;
  /** Получить список разрешений */
  permissions_tree?: Maybe<Permissions>;
  /**
   * Получить список Цен
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по имени, тип, тип операции, период
   */
  priceListFees: Array<PriceListFee>;
  /** Получить реквизиты по ID */
  requisite?: Maybe<Requisites>;
  /**
   * Получить список реквизитов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  requisites?: Maybe<RequisitesPaginator>;
  /** Получить роль по ID */
  role?: Maybe<Role>;
  /**
   * Получить список ролей
   * groups_sort: сортировка по количеству групп
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID или по названию
   * where: {column: name, operator: LIKE, value: "Name"}
   */
  roles?: Maybe<RolePaginator>;
  senders?: Maybe<Array<Maybe<Sender>>>;
  /** Получить по билет ID */
  ticket?: Maybe<Ticket>;
  /** Получить по билет ID */
  ticketComment?: Maybe<TicketComments>;
  /**
   * Получить список билетов
   * orderBy: [
   * {column: ID, order: DESC},
   * {relation: "company", column: "name"},
   * {relation: "department", column: "name"}
   * ] сортировка по ID, компании, позиционный отдел
   * hasCompany: {column: COMPANY_ID, operator:EQ, value: 1} поиск по id компании
   * hasDepartment: {column: DEPARTMENT_ID, operator:EQ, value: 1} поиск по id Департамента
   * hasPosition: {column: DEPARTMENT_POSITION_ID, operator:EQ, value: 1} поиск по id позици
   * hasMember: {column: MEMBER_ID, operator:EQ, value: 1} поиск по id мембера
   * hasClient: {column: CLIENT_ID, operator:EQ, value: 1} поиск по id Клиента
   * where:{column: TITLE, operator: LIKE, value: ""} фильтр по имени, статуса
   */
  tickets?: Maybe<TicketPaginator>;
  /** Получить второй фактор по ID */
  twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
  /** Получить список */
  twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
  /**
   * Получить список пользователей системы
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   */
  users?: Maybe<UsersPaginator>;
};


export type QueryAccountArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountLimitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasAccount?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditions>;
  hasCommissionTemplateLimitActionType?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>;
  hasCommissionTemplateLimitPeriod?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>;
  hasCommissionTemplateLimitTransferDirection?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>;
  hasCommissionTemplateLimitType?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>;
  hasCurrency?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryAccountLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryAccountLimitsWhereWhereConditions>;
};


export type QueryAccountReachedLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountReachedLimitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasAccount?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryAccountReachedLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
};


export type QueryAccountStatesArgs = {
  orderBy?: InputMaybe<Array<QueryAccountStatesOrderByOrderByClause>>;
};


export type QueryAccountsArgs = {
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasClientable?: InputMaybe<QueryAccountsHasClientableWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryAccountsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryAccountCondition>;
};


export type QueryApplicantBankingAccessArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantBankingAccessOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditions>;
};


export type QueryApplicantCompaniesArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Sort>;
  hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};


export type QueryApplicantCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyBusinessTypeArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyLabelsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelsAvailableArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyModulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditions>;
};


export type QueryApplicantCompanyNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantCompanyRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>;
};


export type QueryApplicantIndividualCompanyRelationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyRelationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>;
};


export type QueryApplicantIndividualLabelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualLabelsArgs = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};


export type QueryApplicantIndividualLabelsAvailableArgs = {
  applicant_id?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualModulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditions>;
};


export type QueryApplicantIndividualNoteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualNotesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualsArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  group?: InputMaybe<Sort>;
  hasGroupRole?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantIndividualsWhereWhereConditions>;
};


export type QueryApplicantKycLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantKycLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantKycLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};


export type QueryApplicantRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};


export type QueryApplicantStateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStateReasonsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};


export type QueryApplicantStatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};


export type QueryApplicantStatusArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStatusesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatusesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};


export type QueryApplicant_ModuleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicant_ModulesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryApplicantModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
};


export type QueryBusinessActivitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryBusinessActivitiesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryBusinessActivitiesWhereWhereConditions>;
};


export type QueryBusinessActivityArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryClientListArgs = {
  group_type: Scalars['ID'];
};


export type QueryCommissionPriceListArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionPriceListsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasAccount?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditions>;
  hasCommissionTemplate?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>;
  hasCompany?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditions>;
  hasOwner?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>;
  hasPaymentSystem?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryCommissionPriceListsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderName?: InputMaybe<Sort>;
  where?: InputMaybe<QueryCommissionPriceListsWhereWhereConditions>;
};


export type QueryCommissionTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitActionTypeArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypeOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitPeriodArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTransferDirectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTypesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplatesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasAccount?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditions>;
  hasBusinessActivity?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>;
  hasCompany?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditions>;
  hasOwner?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  paymentProviderName?: InputMaybe<Sort>;
  where?: InputMaybe<QueryCommissionTemplatesWhereWhereConditions>;
};


export type QueryCompaniesArgs = {
  country?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  member_count?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryCompaniesWhereWhereConditions>;
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCompanySettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
};


export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasDepartment?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryDepartmentPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryDepartmentPositionsWhereWhereConditions>;
};


export type QueryDepartmentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasCompany?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryDepartmentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryDepartmentsWhereWhereConditions>;
};


export type QueryEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['ID']>;
  company_id: Scalars['ID'];
  group_role_id: Scalars['ID'];
  group_type_id: Scalars['ID'];
};


export type QueryEmailNotificationsArgs = {
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasApplicantCompany?: InputMaybe<QueryEmailNotificationsHasApplicantCompanyWhereHasConditions>;
  hasApplicantIndividual?: InputMaybe<QueryEmailNotificationsHasApplicantIndividualWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryEmailNotificationsHasGroupRoleWhereHasConditions>;
  hasGroupType?: InputMaybe<QueryEmailNotificationsHasGroupTypeWhereHasConditions>;
  hasMember?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditions>;
  hasTemplates?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryEmailNotificationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryEmailNotificationsWhereWhereConditions>;
};


export type QueryEmailSmtpArgs = {
  id: Scalars['ID'];
};


export type QueryEmailSmtpsArgs = {
  company_id: Scalars['ID'];
  orderBy?: InputMaybe<Array<QueryEmailSmtpsOrderByOrderByClause>>;
};


export type QueryEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplateLayoutArgs = {
  company_id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplatesArgs = {
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasCompany?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryEmailTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryEmailTemplatesWhereWhereConditions>;
};


export type QueryFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryFilesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryFilesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryFilesWhereWhereConditions>;
};


export type QueryGetMatchedUsersArgs = {
  applicant_company_id: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGetMatchedUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupListArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryGroupListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<QueryGroupCondition>;
};


export type QueryGroup_TypeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroup_TypesArgs = {
  mode?: InputMaybe<GroupTypeMode>;
};


export type QueryGroupsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasCommissionTemplate?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditions>;
  hasGroupType?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditions>;
  hasRole?: InputMaybe<QueryGroupsHasRoleWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryGroupsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGroupsWhereWhereConditions>;
};


export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryLanguagesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMemberAccessLimitationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryMemberAccessLimitationsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasCommissionTemplate?: InputMaybe<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions>;
  hasGroup?: InputMaybe<QueryMemberAccessLimitationsHasGroupWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions>;
  hasProvider?: InputMaybe<QueryMemberAccessLimitationsHasProviderWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryMemberAccessLimitationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryMemberAccessLimitationsWhereWhereConditions>;
};


export type QueryMembersArgs = {
  companyName?: InputMaybe<Sort>;
  first?: InputMaybe<Scalars['Int']>;
  hasDepartment?: InputMaybe<QueryMembersHasDepartmentWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryMembersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryMembersWhereWhereConditions>;
};


export type QueryOperationTypesArgs = {
  where?: InputMaybe<QueryOperationTypesWhereWhereConditions>;
};


export type QueryOwnersArgs = {
  orderBy?: InputMaybe<Array<QueryOwnersOrderByOrderByClause>>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentProviderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentProvidersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasPaymentSystems?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryPaymentProvidersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryPaymentProvidersWhereWhereConditions>;
};


export type QueryPaymentSystemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentSystemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  hasCountries?: InputMaybe<QueryPaymentSystemsHasCountriesWhereHasConditions>;
  hasCurrencies?: InputMaybe<QueryPaymentSystemsHasCurrenciesWhereHasConditions>;
  hasProviders?: InputMaybe<QueryPaymentSystemsHasProvidersWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryPaymentSystemsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryPaymentSystemsWhereWhereConditions>;
};


export type QueryPaymentsArgs = {
  AccountNumber?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasAccounts?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditions>;
  hasCompanies?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditions>;
  hasOwner?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditions>;
  hasPaymentOperation?: InputMaybe<QueryPaymentsHasPaymentOperationWhereHasConditions>;
  hasPaymentProvider?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditions>;
  hasPaymentStatus?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditions>;
  hasPaymentUrgency?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryPaymentsWhereWhereConditions>;
};


export type QueryPermissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPermissionsArgs = {
  where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};


export type QueryPriceListFeesArgs = {
  hasList?: InputMaybe<QueryPriceListFeesHasListWhereHasConditions>;
  price_list_id?: InputMaybe<Scalars['ID']>;
  where?: InputMaybe<QueryPriceListFeesWhereWhereConditions>;
};


export type QueryRequisiteArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRequisitesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryRequisitesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryRequisitesWhereWhereConditions>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryRolesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  groups_sort?: InputMaybe<Sort>;
  hasGroupTypes?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditions>;
  hasGroups?: InputMaybe<QueryRolesHasGroupsWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryRolesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryRolesWhereWhereConditions>;
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketsArgs = {
  created_at?: InputMaybe<DateRange>;
  first?: InputMaybe<Scalars['Int']>;
  hasClient?: InputMaybe<QueryTicketsHasClientWhereHasConditions>;
  hasCompany?: InputMaybe<QueryTicketsHasCompanyWhereHasConditions>;
  hasDepartment?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditions>;
  hasMember?: InputMaybe<QueryTicketsHasMemberWhereHasConditions>;
  hasPosition?: InputMaybe<QueryTicketsHasPositionWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryTicketsOrderByRelationOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryTicketsWhereWhereConditions>;
};


export type QueryTwoFactorAuthArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTwoFactorsAuthArgs = {
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryUsersWhereWhereConditions>;
};

export type QueryAccountCondition = {
  account_name?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['String']>;
  account_state_id?: InputMaybe<Scalars['ID']>;
  account_type?: InputMaybe<Scalars['String']>;
  client_id?: InputMaybe<Scalars['ID']>;
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  currency_id?: InputMaybe<Scalars['ID']>;
  group_role_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  member_id?: InputMaybe<Scalars['ID']>;
  owner_id?: InputMaybe<Scalars['ID']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
};

/** Allowed column names for Query.accountLimits.hasAccount. */
export enum QueryAccountLimitsHasAccountColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasAccount` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasAccountWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsHasAccountWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsHasAccountWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsHasAccountColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasAccount` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasAccountWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountLimitsHasAccountWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountLimits.hasCommissionTemplateLimitActionType. */
export enum QueryAccountLimitsHasCommissionTemplateLimitActionTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCommissionTemplateLimitActionType` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCommissionTemplateLimitActionType` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitActionTypeWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountLimits.hasCommissionTemplateLimitPeriod. */
export enum QueryAccountLimitsHasCommissionTemplateLimitPeriodColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCommissionTemplateLimitPeriod` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCommissionTemplateLimitPeriod` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitPeriodWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountLimits.hasCommissionTemplateLimitTransferDirection. */
export enum QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCommissionTemplateLimitTransferDirection` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCommissionTemplateLimitTransferDirection` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTransferDirectionWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountLimits.hasCommissionTemplateLimitType. */
export enum QueryAccountLimitsHasCommissionTemplateLimitTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCommissionTemplateLimitType` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCommissionTemplateLimitType` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountLimitsHasCommissionTemplateLimitTypeWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountLimits.hasCurrency. */
export enum QueryAccountLimitsHasCurrencyColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCurrency` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCurrencyWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsHasCurrencyWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsHasCurrencyWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsHasCurrencyColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCurrency` argument on the query `accountLimits`. */
export type QueryAccountLimitsHasCurrencyWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountLimitsHasCurrencyWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountLimits.orderBy. */
export enum QueryAccountLimitsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.accountLimits.orderBy. */
export type QueryAccountLimitsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountLimitsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.accountLimits.where. */
export enum QueryAccountLimitsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  PeriodCount = 'PERIOD_COUNT'
}

/** Dynamic WHERE conditions for the `where` argument on the query `accountLimits`. */
export type QueryAccountLimitsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountLimitsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `accountLimits`. */
export type QueryAccountLimitsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountLimitsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountReachedLimits.hasAccount. */
export enum QueryAccountReachedLimitsHasAccountColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasAccount` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsHasAccountWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountReachedLimitsHasAccountColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasAccount` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountReachedLimits.orderBy. */
export enum QueryAccountReachedLimitsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.accountReachedLimits.orderBy. */
export type QueryAccountReachedLimitsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountReachedLimitsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.accountReachedLimits.where. */
export enum QueryAccountReachedLimitsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  ClientName = 'CLIENT_NAME',
  ClientType = 'CLIENT_TYPE',
  GroupType = 'GROUP_TYPE',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION'
}

/** Dynamic WHERE conditions for the `where` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountReachedLimitsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accountStates.orderBy. */
export enum QueryAccountStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.accountStates.orderBy. */
export type QueryAccountStatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountStatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export enum QueryAccountWhereColumn {
  AccountName = 'ACCOUNT_NAME',
  AccountNumber = 'ACCOUNT_NUMBER',
  AccountStateId = 'ACCOUNT_STATE_ID',
  AccountType = 'ACCOUNT_TYPE',
  ClientId = 'CLIENT_ID',
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  CompanyId = 'COMPANY_ID',
  CurrencyId = 'CURRENCY_ID',
  GroupRoleId = 'GROUP_ROLE_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  IsPrimary = 'IS_PRIMARY',
  MemberId = 'MEMBER_ID',
  OwnerId = 'OWNER_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID'
}

/** Allowed column names for Query.accounts.hasClientable. */
export enum QueryAccountsHasClientableColumn {
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `hasClientable` argument on the query `accounts`. */
export type QueryAccountsHasClientableWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountsHasClientableWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountsHasClientableWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountsHasClientableWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountsHasClientableColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasClientable` argument on the query `accounts`. */
export type QueryAccountsHasClientableWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountsHasClientableWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.accounts.orderBy. */
export enum QueryAccountsOrderByColumn {
  ClientId = 'CLIENT_ID',
  Id = 'ID'
}

/** Order by clause for Query.accounts.orderBy. */
export type QueryAccountsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantBankingAccess.orderBy. */
export enum QueryApplicantBankingAccessOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

/** Order by clause for Query.applicantBankingAccess.orderBy. */
export type QueryApplicantBankingAccessOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantBankingAccessOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantBankingAccess.where. */
export enum QueryApplicantBankingAccessWhereColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  MemberId = 'MEMBER_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantBankingAccess`. */
export type QueryApplicantBankingAccessWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantBankingAccessWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantBankingAccessWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantBankingAccessWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantBankingAccess`. */
export type QueryApplicantBankingAccessWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantBankingAccessWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasBusinessType. */
export enum QueryApplicantCompaniesHasBusinessTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasBusinessType` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasBusinessType` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasGroupRole. */
export enum QueryApplicantCompaniesHasGroupRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroupRole` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasGroupRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasGroupRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupRole` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasKycLevel. */
export enum QueryApplicantCompaniesHasKycLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasKycLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasKycLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasOwner. */
export enum QueryApplicantCompaniesHasOwnerColumn {
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `hasOwner` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasOwner` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasRiskLevel. */
export enum QueryApplicantCompaniesHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasRiskLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasRiskLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasStateReason. */
export enum QueryApplicantCompaniesHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasStateReason` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasStateReason` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.hasStatus. */
export enum QueryApplicantCompaniesHasStatusColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasStatus` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasStatus` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanies.orderBy. */
export enum QueryApplicantCompaniesOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  OwnerId = 'OWNER_ID',
  Url = 'URL'
}

/** Order by clause for Query.applicantCompanies.orderBy. */
export type QueryApplicantCompaniesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompaniesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanies.where. */
export enum QueryApplicantCompaniesWhereColumn {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  ApplicantStateId = 'APPLICANT_STATE_ID',
  ApplicantStateReasonId = 'APPLICANT_STATE_REASON_ID',
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanyBusinessType.orderBy. */
export enum QueryApplicantCompanyBusinessTypeOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyBusinessType.orderBy. */
export type QueryApplicantCompanyBusinessTypeOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyBusinessTypeOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyBusinessType.where. */
export enum QueryApplicantCompanyBusinessTypeWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyBusinessType`. */
export type QueryApplicantCompanyBusinessTypeWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyBusinessType`. */
export type QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanyLabelsAvailable.orderBy. */
export enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyLabelsAvailable.orderBy. */
export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyLabels.orderBy. */
export enum QueryApplicantCompanyLabelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyLabels.orderBy. */
export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyLabelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyLabels.where. */
export enum QueryApplicantCompanyLabelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyLabels`. */
export type QueryApplicantCompanyLabelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyLabels`. */
export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanyModules.orderBy. */
export enum QueryApplicantCompanyModulesOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID'
}

/** Order by clause for Query.applicantCompanyModules.orderBy. */
export type QueryApplicantCompanyModulesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyModulesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyModules.where. */
export enum QueryApplicantCompanyModulesWhereColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyModules`. */
export type QueryApplicantCompanyModulesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyModulesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyModulesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyModulesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyModules`. */
export type QueryApplicantCompanyModulesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyModulesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanyNotes.orderBy. */
export enum QueryApplicantCompanyNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantCompanyNotes.orderBy. */
export type QueryApplicantCompanyNotesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyNotesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyRiskLevelHistory.orderBy. */
export enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.applicantCompanyRiskLevelHistory.orderBy. */
export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyRiskLevelHistory.where. */
export enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyRiskLevelHistory`. */
export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyRiskLevelHistory`. */
export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantCompanyRiskLevels.orderBy. */
export enum QueryApplicantCompanyRiskLevelsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantCompanyRiskLevels.orderBy. */
export type QueryApplicantCompanyRiskLevelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyRiskLevelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualCompanyPositions.orderBy. */
export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualCompanyPositions.orderBy. */
export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualCompanyPositions.where. */
export enum QueryApplicantIndividualCompanyPositionsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantIndividualCompanyPositions`. */
export type QueryApplicantIndividualCompanyPositionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantIndividualCompanyPositions`. */
export type QueryApplicantIndividualCompanyPositionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualCompanyPositionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantIndividualCompanyRelations.orderBy. */
export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualCompanyRelations.orderBy. */
export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualCompanyRelations.where. */
export enum QueryApplicantIndividualCompanyRelationsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantIndividualCompanyRelations`. */
export type QueryApplicantIndividualCompanyRelationsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantIndividualCompanyRelations`. */
export type QueryApplicantIndividualCompanyRelationsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualCompanyRelationsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantIndividualLabelsAvailable.orderBy. */
export enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualLabelsAvailable.orderBy. */
export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualLabels.orderBy. */
export enum QueryApplicantIndividualLabelsOrderByColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualLabels.orderBy. */
export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualLabelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualLabels.where. */
export enum QueryApplicantIndividualLabelsWhereColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantIndividualLabels`. */
export type QueryApplicantIndividualLabelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantIndividualLabels`. */
export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantIndividualModules.orderBy. */
export enum QueryApplicantIndividualModulesOrderByColumn {
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID'
}

/** Order by clause for Query.applicantIndividualModules.orderBy. */
export type QueryApplicantIndividualModulesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualModulesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualModules.where. */
export enum QueryApplicantIndividualModulesWhereColumn {
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantIndividualModules`. */
export type QueryApplicantIndividualModulesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualModulesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualModulesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualModulesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantIndividualModules`. */
export type QueryApplicantIndividualModulesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualModulesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantIndividualNotes.orderBy. */
export enum QueryApplicantIndividualNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantIndividualNotes.orderBy. */
export type QueryApplicantIndividualNotesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualNotesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualRiskLevels.orderBy. */
export enum QueryApplicantIndividualRiskLevelsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantIndividualRiskLevels.orderBy. */
export type QueryApplicantIndividualRiskLevelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualRiskLevelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividuals.hasGroupRole. */
export enum QueryApplicantIndividualsHasGroupRoleColumn {
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

/** Dynamic WHERE conditions for the `hasGroupRole` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsHasGroupRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualsHasGroupRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupRole` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsHasGroupRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualsHasGroupRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantIndividuals.hasRiskLevel. */
export enum QueryApplicantIndividualsHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasRiskLevel` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsHasRiskLevelWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualsHasRiskLevelColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasRiskLevel` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsHasRiskLevelWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualsHasRiskLevelWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantIndividuals.hasStateReason. */
export enum QueryApplicantIndividualsHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasStateReason` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsHasStateReasonWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasStateReasonWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasStateReasonWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualsHasStateReasonColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasStateReason` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsHasStateReasonWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualsHasStateReasonWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantIndividuals.hasStatus. */
export enum QueryApplicantIndividualsHasStatusColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasStatus` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsHasStatusWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualsHasStatusWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualsHasStatusWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualsHasStatusColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasStatus` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsHasStatusWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualsHasStatusWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantIndividuals.orderBy. */
export enum QueryApplicantIndividualsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  Id = 'ID',
  LastName = 'LAST_NAME'
}

/** Order by clause for Query.applicantIndividuals.orderBy. */
export type QueryApplicantIndividualsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividuals.where. */
export enum QueryApplicantIndividualsWhereColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  LastName = 'LAST_NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantKycLevels.orderBy. */
export enum QueryApplicantKycLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantKycLevels.orderBy. */
export type QueryApplicantKycLevelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantKycLevelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantKycLevels.where. */
export enum QueryApplicantKycLevelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantKycLevels`. */
export type QueryApplicantKycLevelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantKycLevels`. */
export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicant_modules.orderBy. */
export enum QueryApplicantModulesOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.applicant_modules.orderBy. */
export type QueryApplicantModulesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantModulesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicant_modules.where. */
export enum QueryApplicantModulesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicant_modules`. */
export type QueryApplicantModulesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantModulesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantModulesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicant_modules`. */
export type QueryApplicantModulesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantRiskLevelHistory.orderBy. */
export enum QueryApplicantRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.applicantRiskLevelHistory.orderBy. */
export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantRiskLevelHistoryOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantRiskLevelHistory.where. */
export enum QueryApplicantRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantRiskLevelHistory`. */
export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantRiskLevelHistory`. */
export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantRiskLevels.orderBy. */
export enum QueryApplicantRiskLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantRiskLevels.orderBy. */
export type QueryApplicantRiskLevelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantRiskLevelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantRiskLevels.where. */
export enum QueryApplicantRiskLevelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantRiskLevels`. */
export type QueryApplicantRiskLevelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantRiskLevels`. */
export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantStateReasons.orderBy. */
export enum QueryApplicantStateReasonsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStateReasons.orderBy. */
export type QueryApplicantStateReasonsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStateReasonsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStateReasons.where. */
export enum QueryApplicantStateReasonsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStateReasons`. */
export type QueryApplicantStateReasonsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStateReasons`. */
export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantStates.orderBy. */
export enum QueryApplicantStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStates.orderBy. */
export type QueryApplicantStatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStates.where. */
export enum QueryApplicantStatesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStates`. */
export type QueryApplicantStatesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStatesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStates`. */
export type QueryApplicantStatesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.applicantStatuses.orderBy. */
export enum QueryApplicantStatusesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStatuses.orderBy. */
export type QueryApplicantStatusesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStatusesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStatuses.where. */
export enum QueryApplicantStatusesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStatuses`. */
export type QueryApplicantStatusesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStatuses`. */
export type QueryApplicantStatusesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.businessActivities.orderBy. */
export enum QueryBusinessActivitiesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.businessActivities.orderBy. */
export type QueryBusinessActivitiesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryBusinessActivitiesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.businessActivities.where. */
export enum QueryBusinessActivitiesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `businessActivities`. */
export type QueryBusinessActivitiesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryBusinessActivitiesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryBusinessActivitiesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryBusinessActivitiesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryBusinessActivitiesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `businessActivities`. */
export type QueryBusinessActivitiesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryBusinessActivitiesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionPriceLists.hasAccount. */
export enum QueryCommissionPriceListsHasAccountColumn {
  AccountNumber = 'ACCOUNT_NUMBER'
}

/** Dynamic WHERE conditions for the `hasAccount` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasAccountWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasAccountWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasAccountWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsHasAccountColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasAccount` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasAccountWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionPriceListsHasAccountWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionPriceLists.hasCommissionTemplate. */
export enum QueryCommissionPriceListsHasCommissionTemplateColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCommissionTemplate` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCommissionTemplate` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasCommissionTemplateWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionPriceListsHasCommissionTemplateWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionPriceLists.hasCompany. */
export enum QueryCommissionPriceListsHasCompanyColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCompany` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasCompanyWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasCompanyWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasCompanyWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsHasCompanyColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCompany` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasCompanyWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionPriceListsHasCompanyWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionPriceLists.hasOwner. */
export enum QueryCommissionPriceListsHasOwnerColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasOwner` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasOwnerWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasOwnerWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasOwnerWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsHasOwnerColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasOwner` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasOwnerWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionPriceListsHasOwnerWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionPriceLists.hasPaymentProvider. */
export enum QueryCommissionPriceListsHasPaymentProviderColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentProvider` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasPaymentProviderWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentProvider` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasPaymentProviderWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionPriceListsHasPaymentProviderWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionPriceLists.hasPaymentSystem. */
export enum QueryCommissionPriceListsHasPaymentSystemColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentSystem` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasPaymentSystemWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentSystem` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsHasPaymentSystemWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionPriceListsHasPaymentSystemWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionPriceLists.orderBy. */
export enum QueryCommissionPriceListsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionPriceLists.orderBy. */
export type QueryCommissionPriceListsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionPriceListsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionPriceLists.where. */
export enum QueryCommissionPriceListsWhereColumn {
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  Name = 'NAME',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
  ProviderId = 'PROVIDER_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionPriceListsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionPriceListsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplateLimitActionType.orderBy. */
export enum QueryCommissionTemplateLimitActionTypeOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitActionType.orderBy. */
export type QueryCommissionTemplateLimitActionTypeOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitActionTypeOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitActionType.where. */
export enum QueryCommissionTemplateLimitActionTypeWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitActionType`. */
export type QueryCommissionTemplateLimitActionTypeWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitActionType`. */
export type QueryCommissionTemplateLimitActionTypeWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitActionTypeWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplateLimitPeriods.orderBy. */
export enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitPeriods.orderBy. */
export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitPeriods.where. */
export enum QueryCommissionTemplateLimitPeriodsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitPeriods`. */
export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitPeriods`. */
export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplateLimitTransferDirections.orderBy. */
export enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitTransferDirections.orderBy. */
export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitTransferDirections.where. */
export enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitTransferDirections`. */
export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitTransferDirections`. */
export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplateLimitTypes.orderBy. */
export enum QueryCommissionTemplateLimitTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitTypes.orderBy. */
export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitTypesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitTypes.where. */
export enum QueryCommissionTemplateLimitTypesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitTypes`. */
export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitTypes`. */
export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplates.hasAccount. */
export enum QueryCommissionTemplatesHasAccountColumn {
  AccountName = 'ACCOUNT_NAME'
}

/** Dynamic WHERE conditions for the `hasAccount` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasAccountWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasAccountWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasAccountWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplatesHasAccountColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasAccount` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasAccountWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplatesHasAccountWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplates.hasBusinessActivity. */
export enum QueryCommissionTemplatesHasBusinessActivityColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasBusinessActivity` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasBusinessActivityWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasBusinessActivity` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasBusinessActivityWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplatesHasBusinessActivityWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplates.hasCompany. */
export enum QueryCommissionTemplatesHasCompanyColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCompany` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasCompanyWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasCompanyWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasCompanyWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplatesHasCompanyColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCompany` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasCompanyWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplatesHasCompanyWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplates.hasOwner. */
export enum QueryCommissionTemplatesHasOwnerColumn {
  Fullname = 'FULLNAME'
}

/** Dynamic WHERE conditions for the `hasOwner` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasOwnerWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasOwnerWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasOwnerWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplatesHasOwnerColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasOwner` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasOwnerWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplatesHasOwnerWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplates.hasPaymentProvider. */
export enum QueryCommissionTemplatesHasPaymentProviderColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentProvider` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasPaymentProviderWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentProvider` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesHasPaymentProviderWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplatesHasPaymentProviderWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.commissionTemplates.orderBy. */
export enum QueryCommissionTemplatesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplates.orderBy. */
export type QueryCommissionTemplatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplates.where. */
export enum QueryCommissionTemplatesWhereColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplatesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplatesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplatesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplatesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplatesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.companies.orderBy. */
export enum QueryCompaniesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

/** Order by clause for Query.companies.orderBy. */
export type QueryCompaniesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCompaniesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.companies.where. */
export enum QueryCompaniesWhereColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Name = 'NAME',
  Url = 'URL'
}

/** Dynamic WHERE conditions for the `where` argument on the query `companies`. */
export type QueryCompaniesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCompaniesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCompaniesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCompaniesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCompaniesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `companies`. */
export type QueryCompaniesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCompaniesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.departmentPositions.hasDepartment. */
export enum QueryDepartmentPositionsHasDepartmentColumn {
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `hasDepartment` argument on the query `departmentPositions`. */
export type QueryDepartmentPositionsHasDepartmentWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDepartmentPositionsHasDepartmentWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDepartmentPositionsHasDepartmentWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDepartmentPositionsHasDepartmentColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasDepartment` argument on the query `departmentPositions`. */
export type QueryDepartmentPositionsHasDepartmentWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryDepartmentPositionsHasDepartmentWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.departmentPositions.orderBy. */
export enum QueryDepartmentPositionsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.departmentPositions.orderBy. */
export type QueryDepartmentPositionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryDepartmentPositionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.departmentPositions.where. */
export enum QueryDepartmentPositionsWhereColumn {
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `departmentPositions`. */
export type QueryDepartmentPositionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDepartmentPositionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryDepartmentPositionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDepartmentPositionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDepartmentPositionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `departmentPositions`. */
export type QueryDepartmentPositionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryDepartmentPositionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.departments.hasCompany. */
export enum QueryDepartmentsHasCompanyColumn {
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `hasCompany` argument on the query `departments`. */
export type QueryDepartmentsHasCompanyWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDepartmentsHasCompanyWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDepartmentsHasCompanyWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDepartmentsHasCompanyColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCompany` argument on the query `departments`. */
export type QueryDepartmentsHasCompanyWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryDepartmentsHasCompanyWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.departments.orderBy. */
export enum QueryDepartmentsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.departments.orderBy. */
export type QueryDepartmentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryDepartmentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.departments.where. */
export enum QueryDepartmentsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `departments`. */
export type QueryDepartmentsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDepartmentsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryDepartmentsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDepartmentsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDepartmentsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `departments`. */
export type QueryDepartmentsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryDepartmentsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailNotifications.hasApplicantCompany. */
export enum QueryEmailNotificationsHasApplicantCompanyColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasApplicantCompany` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasApplicantCompanyWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsHasApplicantCompanyWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailNotificationsHasApplicantCompanyWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsHasApplicantCompanyWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsHasApplicantCompanyColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasApplicantCompany` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasApplicantCompanyWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailNotificationsHasApplicantCompanyWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailNotifications.hasApplicantIndividual. */
export enum QueryEmailNotificationsHasApplicantIndividualColumn {
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `hasApplicantIndividual` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasApplicantIndividualWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsHasApplicantIndividualWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailNotificationsHasApplicantIndividualWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsHasApplicantIndividualWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsHasApplicantIndividualColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasApplicantIndividual` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasApplicantIndividualWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailNotificationsHasApplicantIndividualWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailNotifications.hasGroupRole. */
export enum QueryEmailNotificationsHasGroupRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroupRole` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasGroupRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsHasGroupRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailNotificationsHasGroupRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsHasGroupRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsHasGroupRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupRole` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasGroupRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailNotificationsHasGroupRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailNotifications.hasGroupType. */
export enum QueryEmailNotificationsHasGroupTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroupType` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasGroupTypeWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsHasGroupTypeWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailNotificationsHasGroupTypeWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsHasGroupTypeWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsHasGroupTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupType` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasGroupTypeWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailNotificationsHasGroupTypeWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailNotifications.hasMember. */
export enum QueryEmailNotificationsHasMemberColumn {
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `hasMember` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasMemberWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsHasMemberWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsHasMemberWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsHasMemberColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasMember` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasMemberWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailNotificationsHasMemberWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailNotifications.hasTemplates. */
export enum QueryEmailNotificationsHasTemplatesColumn {
  Subject = 'SUBJECT'
}

/** Dynamic WHERE conditions for the `hasTemplates` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasTemplatesWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsHasTemplatesWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsHasTemplatesWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsHasTemplatesColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasTemplates` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsHasTemplatesWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailNotificationsHasTemplatesWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailNotifications.orderBy. */
export enum QueryEmailNotificationsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.emailNotifications.orderBy. */
export type QueryEmailNotificationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailNotificationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.emailNotifications.where. */
export enum QueryEmailNotificationsWhereColumn {
  CompanyId = 'COMPANY_ID',
  GroupType = 'GROUP_TYPE',
  RecipientType = 'RECIPIENT_TYPE',
  Type = 'TYPE'
}

/** Dynamic WHERE conditions for the `where` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailNotificationsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailNotificationsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailSmtps.orderBy. */
export enum QueryEmailSmtpsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.emailSmtps.orderBy. */
export type QueryEmailSmtpsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailSmtpsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.emailTemplates.hasCompany. */
export enum QueryEmailTemplatesHasCompanyColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCompany` argument on the query `emailTemplates`. */
export type QueryEmailTemplatesHasCompanyWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailTemplatesHasCompanyWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailTemplatesHasCompanyWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailTemplatesHasCompanyColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCompany` argument on the query `emailTemplates`. */
export type QueryEmailTemplatesHasCompanyWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailTemplatesHasCompanyWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.emailTemplates.orderBy. */
export enum QueryEmailTemplatesOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.emailTemplates.orderBy. */
export type QueryEmailTemplatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailTemplatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.emailTemplates.where. */
export enum QueryEmailTemplatesWhereColumn {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME',
  ServiceType = 'SERVICE_TYPE',
  Type = 'TYPE'
}

/** Dynamic WHERE conditions for the `where` argument on the query `emailTemplates`. */
export type QueryEmailTemplatesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailTemplatesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryEmailTemplatesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailTemplatesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailTemplatesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `emailTemplates`. */
export type QueryEmailTemplatesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryEmailTemplatesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.files.orderBy. */
export enum QueryFilesOrderByColumn {
  AuthorId = 'AUTHOR_ID',
  Id = 'ID'
}

/** Order by clause for Query.files.orderBy. */
export type QueryFilesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryFilesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.files.where. */
export enum QueryFilesWhereColumn {
  AuthorId = 'AUTHOR_ID',
  EntityType = 'ENTITY_TYPE'
}

/** Dynamic WHERE conditions for the `where` argument on the query `files`. */
export type QueryFilesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryFilesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryFilesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryFilesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryFilesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `files`. */
export type QueryFilesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryFilesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.getMatchedUsers.orderBy. */
export enum QueryGetMatchedUsersOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.getMatchedUsers.orderBy. */
export type QueryGetMatchedUsersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetMatchedUsersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type QueryGroupCondition = {
  commission_template_id?: InputMaybe<Scalars['ID']>;
  company_id?: InputMaybe<Scalars['ID']>;
  group_type_id?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  payment_provider_id?: InputMaybe<Scalars['ID']>;
  role_id?: InputMaybe<Scalars['ID']>;
};

/** Allowed column names for Query.groupList.orderBy. */
export enum QueryGroupListOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.groupList.orderBy. */
export type QueryGroupListOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGroupListOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.groups.hasCommissionTemplate. */
export enum QueryGroupsHasCommissionTemplateColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCommissionTemplate` argument on the query `groups`. */
export type QueryGroupsHasCommissionTemplateWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupsHasCommissionTemplateWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupsHasCommissionTemplateWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupsHasCommissionTemplateColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCommissionTemplate` argument on the query `groups`. */
export type QueryGroupsHasCommissionTemplateWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGroupsHasCommissionTemplateWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.groups.hasGroupType. */
export enum QueryGroupsHasGroupTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroupType` argument on the query `groups`. */
export type QueryGroupsHasGroupTypeWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupsHasGroupTypeWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupsHasGroupTypeWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupsHasGroupTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupType` argument on the query `groups`. */
export type QueryGroupsHasGroupTypeWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGroupsHasGroupTypeWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.groups.hasPaymentProvider. */
export enum QueryGroupsHasPaymentProviderColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentProvider` argument on the query `groups`. */
export type QueryGroupsHasPaymentProviderWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupsHasPaymentProviderWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupsHasPaymentProviderWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupsHasPaymentProviderColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentProvider` argument on the query `groups`. */
export type QueryGroupsHasPaymentProviderWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGroupsHasPaymentProviderWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.groups.hasRole. */
export enum QueryGroupsHasRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasRole` argument on the query `groups`. */
export type QueryGroupsHasRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupsHasRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGroupsHasRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupsHasRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupsHasRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasRole` argument on the query `groups`. */
export type QueryGroupsHasRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGroupsHasRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.groups.orderBy. */
export enum QueryGroupsOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE'
}

/** Order by clause for Query.groups.orderBy. */
export type QueryGroupsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGroupsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.groups.where. */
export enum QueryGroupsWhereColumn {
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  RoleId = 'ROLE_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `groups`. */
export type QueryGroupsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGroupsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `groups`. */
export type QueryGroupsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGroupsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.memberAccessLimitations.hasCommissionTemplate. */
export enum QueryMemberAccessLimitationsHasCommissionTemplateColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCommissionTemplate` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMemberAccessLimitationsHasCommissionTemplateColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCommissionTemplate` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryMemberAccessLimitationsHasCommissionTemplateWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.memberAccessLimitations.hasGroup. */
export enum QueryMemberAccessLimitationsHasGroupColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Allowed column names for Query.memberAccessLimitations.hasGroupRole. */
export enum QueryMemberAccessLimitationsHasGroupRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroupRole` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMemberAccessLimitationsHasGroupRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupRole` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsHasGroupRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryMemberAccessLimitationsHasGroupRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Dynamic WHERE conditions for the `hasGroup` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsHasGroupWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsHasGroupWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryMemberAccessLimitationsHasGroupWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsHasGroupWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMemberAccessLimitationsHasGroupColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroup` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsHasGroupWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryMemberAccessLimitationsHasGroupWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.memberAccessLimitations.hasProvider. */
export enum QueryMemberAccessLimitationsHasProviderColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasProvider` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsHasProviderWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsHasProviderWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryMemberAccessLimitationsHasProviderWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsHasProviderWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMemberAccessLimitationsHasProviderColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasProvider` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsHasProviderWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryMemberAccessLimitationsHasProviderWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.memberAccessLimitations.orderBy. */
export enum QueryMemberAccessLimitationsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.memberAccessLimitations.orderBy. */
export type QueryMemberAccessLimitationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMemberAccessLimitationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.memberAccessLimitations.where. */
export enum QueryMemberAccessLimitationsWhereColumn {
  GroupRoleId = 'GROUP_ROLE_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID',
  ProviderId = 'PROVIDER_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryMemberAccessLimitationsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMemberAccessLimitationsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryMemberAccessLimitationsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.members.hasDepartment. */
export enum QueryMembersHasDepartmentColumn {
  DepartmentId = 'DEPARTMENT_ID'
}

/** Dynamic WHERE conditions for the `hasDepartment` argument on the query `members`. */
export type QueryMembersHasDepartmentWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMembersHasDepartmentWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryMembersHasDepartmentWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMembersHasDepartmentWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMembersHasDepartmentColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasDepartment` argument on the query `members`. */
export type QueryMembersHasDepartmentWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryMembersHasDepartmentWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.members.hasGroupRole. */
export enum QueryMembersHasGroupRoleColumn {
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

/** Dynamic WHERE conditions for the `hasGroupRole` argument on the query `members`. */
export type QueryMembersHasGroupRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMembersHasGroupRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMembersHasGroupRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMembersHasGroupRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupRole` argument on the query `members`. */
export type QueryMembersHasGroupRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryMembersHasGroupRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.members.orderBy. */
export enum QueryMembersOrderByColumn {
  Email = 'EMAIL',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  LastLoginAt = 'LAST_LOGIN_AT'
}

/** Order by clause for Query.members.orderBy. */
export type QueryMembersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMembersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `where` argument on the query `members`. */
export type QueryMembersWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMembersWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryMembersWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMembersWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<MembersColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `members`. */
export type QueryMembersWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryMembersWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.operationTypes.where. */
export enum QueryOperationTypesWhereColumn {
  FeeTypeId = 'FEE_TYPE_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `operationTypes`. */
export type QueryOperationTypesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryOperationTypesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryOperationTypesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryOperationTypesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryOperationTypesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `operationTypes`. */
export type QueryOperationTypesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryOperationTypesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.owners.orderBy. */
export enum QueryOwnersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Order by clause for Query.owners.orderBy. */
export type QueryOwnersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryOwnersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.paymentProviders.hasPaymentSystems. */
export enum QueryPaymentProvidersHasPaymentSystemsColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentSystems` argument on the query `paymentProviders`. */
export type QueryPaymentProvidersHasPaymentSystemsWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentSystems` argument on the query `paymentProviders`. */
export type QueryPaymentProvidersHasPaymentSystemsWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentProvidersHasPaymentSystemsWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.paymentProviders.orderBy. */
export enum QueryPaymentProvidersOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.paymentProviders.orderBy. */
export type QueryPaymentProvidersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentProvidersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.paymentProviders.where. */
export enum QueryPaymentProvidersWhereColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `paymentProviders`. */
export type QueryPaymentProvidersWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentProvidersWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentProvidersWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentProvidersWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentProvidersWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `paymentProviders`. */
export type QueryPaymentProvidersWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentProvidersWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.paymentSystems.hasCountries. */
export enum QueryPaymentSystemsHasCountriesColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCountries` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsHasCountriesWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentSystemsHasCountriesWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentSystemsHasCountriesWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentSystemsHasCountriesWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentSystemsHasCountriesColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCountries` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsHasCountriesWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentSystemsHasCountriesWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.paymentSystems.hasCurrencies. */
export enum QueryPaymentSystemsHasCurrenciesColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCurrencies` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsHasCurrenciesWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentSystemsHasCurrenciesWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentSystemsHasCurrenciesWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentSystemsHasCurrenciesWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentSystemsHasCurrenciesColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCurrencies` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsHasCurrenciesWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentSystemsHasCurrenciesWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.paymentSystems.hasProviders. */
export enum QueryPaymentSystemsHasProvidersColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasProviders` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsHasProvidersWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentSystemsHasProvidersWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentSystemsHasProvidersWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentSystemsHasProvidersWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentSystemsHasProvidersColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasProviders` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsHasProvidersWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentSystemsHasProvidersWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.paymentSystems.orderBy. */
export enum QueryPaymentSystemsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.paymentSystems.orderBy. */
export type QueryPaymentSystemsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentSystemsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.paymentSystems.where. */
export enum QueryPaymentSystemsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentSystemsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentSystemsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentSystemsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentSystemsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentSystemsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.payments.hasAccounts. */
export enum QueryPaymentsHasAccountsColumn {
  AccountId = 'ACCOUNT_ID'
}

/** Dynamic WHERE conditions for the `hasAccounts` argument on the query `payments`. */
export type QueryPaymentsHasAccountsWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsHasAccountsWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsHasAccountsWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsHasAccountsColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasAccounts` argument on the query `payments`. */
export type QueryPaymentsHasAccountsWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentsHasAccountsWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.payments.hasCompanies. */
export enum QueryPaymentsHasCompaniesColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCompanies` argument on the query `payments`. */
export type QueryPaymentsHasCompaniesWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsHasCompaniesWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsHasCompaniesWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsHasCompaniesColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCompanies` argument on the query `payments`. */
export type QueryPaymentsHasCompaniesWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentsHasCompaniesWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.payments.hasOwner. */
export enum QueryPaymentsHasOwnerColumn {
  Fullname = 'FULLNAME'
}

/** Dynamic WHERE conditions for the `hasOwner` argument on the query `payments`. */
export type QueryPaymentsHasOwnerWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsHasOwnerWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsHasOwnerWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsHasOwnerColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasOwner` argument on the query `payments`. */
export type QueryPaymentsHasOwnerWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentsHasOwnerWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.payments.hasPaymentOperation. */
export enum QueryPaymentsHasPaymentOperationColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentOperation` argument on the query `payments`. */
export type QueryPaymentsHasPaymentOperationWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentOperationWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentsHasPaymentOperationWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentOperationWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsHasPaymentOperationColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentOperation` argument on the query `payments`. */
export type QueryPaymentsHasPaymentOperationWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentsHasPaymentOperationWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.payments.hasPaymentProvider. */
export enum QueryPaymentsHasPaymentProviderColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentProvider` argument on the query `payments`. */
export type QueryPaymentsHasPaymentProviderWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentProviderWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentProviderWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsHasPaymentProviderColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentProvider` argument on the query `payments`. */
export type QueryPaymentsHasPaymentProviderWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentsHasPaymentProviderWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.payments.hasPaymentStatus. */
export enum QueryPaymentsHasPaymentStatusColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentStatus` argument on the query `payments`. */
export type QueryPaymentsHasPaymentStatusWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentStatusWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentStatusWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsHasPaymentStatusColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentStatus` argument on the query `payments`. */
export type QueryPaymentsHasPaymentStatusWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentsHasPaymentStatusWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.payments.hasPaymentUrgency. */
export enum QueryPaymentsHasPaymentUrgencyColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPaymentUrgency` argument on the query `payments`. */
export type QueryPaymentsHasPaymentUrgencyWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsHasPaymentUrgencyWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsHasPaymentUrgencyWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsHasPaymentUrgencyColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPaymentUrgency` argument on the query `payments`. */
export type QueryPaymentsHasPaymentUrgencyWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentsHasPaymentUrgencyWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.payments.orderBy. */
export enum QueryPaymentsOrderByColumn {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT',
  Fee = 'FEE',
  Id = 'ID',
  PaymentNumber = 'PAYMENT_NUMBER'
}

/** Order by clause for Query.payments.orderBy. */
export type QueryPaymentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.payments.where. */
export enum QueryPaymentsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  CompanyId = 'COMPANY_ID',
  PaymentNumber = 'PAYMENT_NUMBER',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderBankAccount = 'SENDER_BANK_ACCOUNT',
  SenderName = 'SENDER_NAME',
  Status = 'STATUS',
  TypeId = 'TYPE_ID',
  UrgencyId = 'URGENCY_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `payments`. */
export type QueryPaymentsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPaymentsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `payments`. */
export type QueryPaymentsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPaymentsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.permissions.where. */
export enum QueryPermissionsWhereColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `permissions`. */
export type QueryPermissionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPermissionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `permissions`. */
export type QueryPermissionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.priceListFees.hasList. */
export enum QueryPriceListFeesHasListColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasList` argument on the query `priceListFees`. */
export type QueryPriceListFeesHasListWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPriceListFeesHasListWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPriceListFeesHasListWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPriceListFeesHasListWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPriceListFeesHasListColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasList` argument on the query `priceListFees`. */
export type QueryPriceListFeesHasListWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPriceListFeesHasListWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.priceListFees.where. */
export enum QueryPriceListFeesWhereColumn {
  Name = 'NAME',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PeriodId = 'PERIOD_ID',
  TypeId = 'TYPE_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `priceListFees`. */
export type QueryPriceListFeesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPriceListFeesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPriceListFeesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPriceListFeesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPriceListFeesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `priceListFees`. */
export type QueryPriceListFeesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPriceListFeesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.requisites.orderBy. */
export enum QueryRequisitesOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.requisites.orderBy. */
export type QueryRequisitesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryRequisitesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.requisites.where. */
export enum QueryRequisitesWhereColumn {
  AccountId = 'ACCOUNT_ID',
  AccountNo = 'ACCOUNT_NO',
  BankName = 'BANK_NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `requisites`. */
export type QueryRequisitesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRequisitesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryRequisitesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRequisitesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRequisitesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `requisites`. */
export type QueryRequisitesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryRequisitesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.roles.hasGroupTypes. */
export enum QueryRolesHasGroupTypesColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroupTypes` argument on the query `roles`. */
export type QueryRolesHasGroupTypesWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRolesHasGroupTypesWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRolesHasGroupTypesWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRolesHasGroupTypesColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupTypes` argument on the query `roles`. */
export type QueryRolesHasGroupTypesWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryRolesHasGroupTypesWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.roles.hasGroups. */
export enum QueryRolesHasGroupsColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroups` argument on the query `roles`. */
export type QueryRolesHasGroupsWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRolesHasGroupsWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryRolesHasGroupsWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRolesHasGroupsWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRolesHasGroupsColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroups` argument on the query `roles`. */
export type QueryRolesHasGroupsWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryRolesHasGroupsWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.roles.orderBy. */
export enum QueryRolesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.roles.orderBy. */
export type QueryRolesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryRolesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.roles.where. */
export enum QueryRolesWhereColumn {
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `roles`. */
export type QueryRolesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRolesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryRolesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRolesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRolesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `roles`. */
export type QueryRolesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryRolesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.tickets.hasClient. */
export enum QueryTicketsHasClientColumn {
  Fullname = 'FULLNAME'
}

/** Dynamic WHERE conditions for the `hasClient` argument on the query `tickets`. */
export type QueryTicketsHasClientWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTicketsHasClientWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryTicketsHasClientWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTicketsHasClientWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTicketsHasClientColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasClient` argument on the query `tickets`. */
export type QueryTicketsHasClientWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryTicketsHasClientWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.tickets.hasCompany. */
export enum QueryTicketsHasCompanyColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasCompany` argument on the query `tickets`. */
export type QueryTicketsHasCompanyWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTicketsHasCompanyWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryTicketsHasCompanyWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTicketsHasCompanyWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTicketsHasCompanyColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasCompany` argument on the query `tickets`. */
export type QueryTicketsHasCompanyWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryTicketsHasCompanyWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.tickets.hasDepartment. */
export enum QueryTicketsHasDepartmentColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasDepartment` argument on the query `tickets`. */
export type QueryTicketsHasDepartmentWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTicketsHasDepartmentWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTicketsHasDepartmentWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTicketsHasDepartmentColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasDepartment` argument on the query `tickets`. */
export type QueryTicketsHasDepartmentWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryTicketsHasDepartmentWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.tickets.hasMember. */
export enum QueryTicketsHasMemberColumn {
  Fullname = 'FULLNAME'
}

/** Dynamic WHERE conditions for the `hasMember` argument on the query `tickets`. */
export type QueryTicketsHasMemberWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTicketsHasMemberWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryTicketsHasMemberWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTicketsHasMemberWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTicketsHasMemberColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasMember` argument on the query `tickets`. */
export type QueryTicketsHasMemberWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryTicketsHasMemberWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.tickets.hasPosition. */
export enum QueryTicketsHasPositionColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasPosition` argument on the query `tickets`. */
export type QueryTicketsHasPositionWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTicketsHasPositionWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryTicketsHasPositionWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTicketsHasPositionWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTicketsHasPositionColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasPosition` argument on the query `tickets`. */
export type QueryTicketsHasPositionWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryTicketsHasPositionWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.tickets.orderBy. */
export enum QueryTicketsOrderByColumn {
  Id = 'ID'
}

/** Aggregate specification for Query.tickets.orderBy.company. */
export type QueryTicketsOrderByCompany = {
  /** Always COUNT. */
  aggregate: OrderByRelationAggregateFunction;
};

/** Aggregate specification for Query.tickets.orderBy.department. */
export type QueryTicketsOrderByDepartment = {
  /** Always COUNT. */
  aggregate: OrderByRelationAggregateFunction;
};

/** Order by clause for Query.tickets.orderBy. */
export type QueryTicketsOrderByRelationOrderByClause = {
  /** The column that is used for ordering. */
  column?: InputMaybe<QueryTicketsOrderByColumn>;
  /** Aggregate specification. */
  company?: InputMaybe<QueryTicketsOrderByCompany>;
  /** Aggregate specification. */
  department?: InputMaybe<QueryTicketsOrderByDepartment>;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.tickets.where. */
export enum QueryTicketsWhereColumn {
  Status = 'STATUS',
  Title = 'TITLE'
}

/** Dynamic WHERE conditions for the `where` argument on the query `tickets`. */
export type QueryTicketsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTicketsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryTicketsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTicketsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTicketsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `tickets`. */
export type QueryTicketsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryTicketsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.users.orderBy. */
export enum QueryUsersOrderByColumn {
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Order by clause for Query.users.orderBy. */
export type QueryUsersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryUsersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `where` argument on the query `users`. */
export type QueryUsersWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryUsersWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryUsersWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryUsersWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<UsersColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `users`. */
export type QueryUsersWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryUsersWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export enum RecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

/**
 * Реквизиты
 * Banking -> Accounts -> Requisites
 */
export type Requisites = {
  __typename?: 'Requisites';
  /** Получить связанный аккаунт */
  account_id?: Maybe<Accounts>;
  /** Номер аккаунта */
  account_no: Scalars['String'];
  /** Адрес */
  address: Scalars['String'];
  /** Адрес банка */
  bank_address: Scalars['String'];
  /** Банк корреспондент */
  bank_correspondent?: Maybe<Scalars['JSON']>;
  /** Получить связанную страну банка */
  bank_country_id?: Maybe<Country>;
  /** Название банка */
  bank_name: Scalars['String'];
  /** Получить связанную страну */
  country_id?: Maybe<Country>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** IBAN */
  iban: Scalars['String'];
  id: Scalars['ID'];
  /** Получатель */
  recipient: Scalars['String'];
  /** Registration Number */
  registration_number: Scalars['Int'];
  /** SWIFT */
  swift: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of Requisites items. */
export type RequisitesPaginator = {
  __typename?: 'RequisitesPaginator';
  /** A list of Requisites items. */
  data: Array<Requisites>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Роли
 * Settings->Manager Roles->Roles List
 */
export type Role = {
  __typename?: 'Role';
  /** Получить компанию */
  company?: Maybe<Companies>;
  /** Описание для роли */
  description?: Maybe<Scalars['String']>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** Получить список групп */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  /** Получить количество групп с данной ролью */
  groups_count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  is_all_companies?: Maybe<Scalars['Boolean']>;
  /** Название роли */
  name: Scalars['String'];
  /** Получить список категорий полномочий */
  permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
  /** Получить список полномочий */
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  /** Получить дерево разрешений */
  permissions_tree?: Maybe<Scalars['JSON']>;
};

/** A paginated list of Role items. */
export type RolePaginator = {
  __typename?: 'RolePaginator';
  /** A list of Role items. */
  data: Array<Role>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

export enum Securities {
  Auto = 'Auto',
  Ssl = 'Ssl',
  Starttls = 'Starttls'
}

export type Sender = {
  __typename?: 'Sender';
  /** Sender name */
  sender_name: Scalars['String'];
};

export enum ServiceType {
  AdminNotify = 'AdminNotify',
  Banking = 'Banking',
  Common = 'Common',
  System = 'System'
}

export enum Sex {
  Female = 'Female',
  Male = 'Male'
}

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Number of items per page. */
  perPage: Scalars['Int'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type StatusType = {
  __typename?: 'StatusType';
  message?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

/**
 * Билеты
 * Banking -> Tickets
 */
export type Ticket = {
  __typename?: 'Ticket';
  /** Получить Клиента */
  client?: Maybe<ApplicantIndividual>;
  /** Получить комментарии */
  comments?: Maybe<Array<Maybe<TicketComments>>>;
  /** Получить компанию */
  company?: Maybe<Companies>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** Получить Департаменты */
  department?: Maybe<Departments>;
  /** Получить файл */
  file_object?: Maybe<Files>;
  id: Scalars['ID'];
  /** Получить мембера */
  member?: Maybe<Members>;
  /** Сообщение */
  message: Scalars['String'];
  /** Получить позицию */
  position?: Maybe<DepartmentPosition>;
  /** Статус */
  status: Scalars['Int'];
  /** Название */
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** Комментарии билетов */
export type TicketComments = {
  __typename?: 'TicketComments';
  /** Получить Клиента */
  client?: Maybe<ApplicantIndividual>;
  created_at?: Maybe<Scalars['DateTime']>;
  /** Получить файл */
  file_object?: Maybe<Files>;
  id: Scalars['ID'];
  /** Сообщение */
  message: Scalars['String'];
  /** Получить билет */
  ticket?: Maybe<Ticket>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

/** A paginated list of Ticket items. */
export type TicketPaginator = {
  __typename?: 'TicketPaginator';
  /** A list of Ticket items. */
  data: Array<Ticket>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Методы двухфакторной авторизации */
export type TwoFactorAuthSettings = {
  __typename?: 'TwoFactorAuthSettings';
  id: Scalars['ID'];
  /** Название второго фактора */
  name: Scalars['String'];
};

/** A paginated list of TwoFactorAuthSettings items. */
export type TwoFactorAuthSettingsPaginator = {
  __typename?: 'TwoFactorAuthSettingsPaginator';
  /** A list of TwoFactorAuthSettings items. */
  data: Array<TwoFactorAuthSettings>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Пользователи
 * Roles->Users
 */
export type Users = {
  __typename?: 'Users';
  /** получить компанию */
  company?: Maybe<Companies>;
  /** Email участника */
  email?: Maybe<Scalars['EMAIL']>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id?: Maybe<Scalars['ID']>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']>;
};

export enum UsersColumn {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

/** A paginated list of Users items. */
export type UsersPaginator = {
  __typename?: 'UsersPaginator';
  /** A list of Users items. */
  data: Array<Users>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type RelationsQueryVariables = Exact<{ [key: string]: never; }>;


export type RelationsQuery = { __typename?: 'Query', applicantIndividualCompanyRelations?: { __typename?: 'ApplicantIndividualCompanyRelationPaginator', data: Array<{ __typename?: 'ApplicantIndividualCompanyRelation', id: string, name: string }> } | null };

export type PositionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PositionsQuery = { __typename?: 'Query', applicantIndividualCompanyPositions?: { __typename?: 'ApplicantIndividualCompanyPositionPaginator', data: Array<{ __typename?: 'ApplicantIndividualCompanyPosition', id: string, name: string }> } | null };


export const RelationsDocument = gql`
    query Relations {
  applicantIndividualCompanyRelations {
    data {
      id
      name
    }
  }
}
    `;

/**
 * __useRelationsQuery__
 *
 * To run a query within a React component, call `useRelationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRelationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RelationsQuery, RelationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<RelationsQuery, RelationsQueryVariables>(RelationsDocument, options);
      }
export function useRelationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RelationsQuery, RelationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<RelationsQuery, RelationsQueryVariables>(RelationsDocument, options);
        }
export type RelationsQueryHookResult = ReturnType<typeof useRelationsQuery>;
export type RelationsLazyQueryHookResult = ReturnType<typeof useRelationsLazyQuery>;
export type RelationsQueryResult = Apollo.QueryResult<RelationsQuery, RelationsQueryVariables>;
export const PositionsDocument = gql`
    query Positions {
  applicantIndividualCompanyPositions {
    data {
      id
      name
    }
  }
}
    `;

/**
 * __usePositionsQuery__
 *
 * To run a query within a React component, call `usePositionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePositionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePositionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePositionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PositionsQuery, PositionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<PositionsQuery, PositionsQueryVariables>(PositionsDocument, options);
      }
export function usePositionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PositionsQuery, PositionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<PositionsQuery, PositionsQueryVariables>(PositionsDocument, options);
        }
export type PositionsQueryHookResult = ReturnType<typeof usePositionsQuery>;
export type PositionsLazyQueryHookResult = ReturnType<typeof usePositionsLazyQuery>;
export type PositionsQueryResult = Apollo.QueryResult<PositionsQuery, PositionsQueryVariables>;