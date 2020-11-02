/*************************************************************
** Class generated by CodeTrigger, Version 4.8.6.1
** This class was generated on 04/10/2020 10:20:59 PM
** Changes to this file may cause incorrect behaviour and will be lost if the code is regenerated
**************************************************************/
using System;
using System.Collections.Generic;
using CXR1BSAC.Data;

namespace CXR1BSAC.Business
{
	///<Summary>
	///Class definition
	///This is the definition of the class BOField.
	///</Summary>
	public partial class BOField : Conn_BaseBusiness
	{
		#region member variables
		protected Guid? _id;
		protected string _name;
		protected string _instance;
		protected string _value;
		protected string _flightRef;
		protected bool _isDirty = false;
		/*collection member objects*******************/
		/*********************************************/
		#endregion

		#region class methods
		///<Summary>
		///Constructor
		///This is the default constructor
		///</Summary>
		///<returns>
		///void
		///</returns>
		///<parameters>
		///
		///</parameters>
		public BOField()
		{
		}

		///<Summary>
		///Constructor
		///Constructor using primary key(s)
		///</Summary>
		///<returns>
		///void
		///</returns>
		///<parameters>
		///Guid id
		///</parameters>
		public BOField(Guid id)
		{
			try
			{
				DAOField daoField = DAOField.SelectOne(id);
				_id = daoField.Id;
				_name = daoField.Name;
				_instance = daoField.Instance;
				_value = daoField.Value;
				_flightRef = daoField.FlightRef;
			}
			catch
			{
				throw;
			}
		}

		///<Summary>
		///Constructor
		///This constructor initializes the business object from its respective data object
		///</Summary>
		///<returns>
		///void
		///</returns>
		///<parameters>
		///DAOField
		///</parameters>
		protected internal BOField(DAOField daoField)
		{
			try
			{
				_id = daoField.Id;
				_name = daoField.Name;
				_instance = daoField.Instance;
				_value = daoField.Value;
				_flightRef = daoField.FlightRef;
			}
			catch
			{
				throw;
			}
		}

		///<Summary>
		///SaveNew
		///This method persists a new Field record to the store
		///</Summary>
		///<returns>
		///void
		///</returns>
		///<parameters>
		///
		///</parameters>
		public virtual void SaveNew()
		{
			DAOField daoField = new DAOField();
			RegisterDataObject(daoField);
			BeginTransaction("savenewBOField");
			try
			{
				daoField.Id = _id;
				daoField.Name = _name;
				daoField.Instance = _instance;
				daoField.Value = _value;
				daoField.FlightRef = _flightRef;
				daoField.Insert();
				CommitTransaction();
				
				_id = daoField.Id;
				_name = daoField.Name;
				_instance = daoField.Instance;
				_value = daoField.Value;
				_flightRef = daoField.FlightRef;
				_isDirty = false;
			}
			catch
			{
				RollbackTransaction("savenewBOField");
				throw;
			}
		}
		
		///<Summary>
		///Update
		///This method updates one Field record in the store
		///</Summary>
		///<returns>
		///void
		///</returns>
		///<parameters>
		///BOField
		///</parameters>
		public virtual void Update()
		{
			DAOField daoField = new DAOField();
			RegisterDataObject(daoField);
			BeginTransaction("updateBOField");
			try
			{
				daoField.Id = _id;
				daoField.Name = _name;
				daoField.Instance = _instance;
				daoField.Value = _value;
				daoField.FlightRef = _flightRef;
				daoField.Update();
				CommitTransaction();
				
				_id = daoField.Id;
				_name = daoField.Name;
				_instance = daoField.Instance;
				_value = daoField.Value;
				_flightRef = daoField.FlightRef;
				_isDirty = false;
			}
			catch
			{
				RollbackTransaction("updateBOField");
				throw;
			}
		}
		///<Summary>
		///Delete
		///This method deletes one Field record from the store
		///</Summary>
		///<returns>
		///void
		///</returns>
		///<parameters>
		///
		///</parameters>
		public virtual void Delete()
		{
			DAOField daoField = new DAOField();
			RegisterDataObject(daoField);
			BeginTransaction("deleteBOField");
			try
			{
				daoField.Id = _id;
				daoField.Delete();
				CommitTransaction();
			}
			catch
			{
				RollbackTransaction("deleteBOField");
				throw;
			}
		}
		
		///<Summary>
		///FieldCollection
		///This method returns the collection of BOField objects
		///</Summary>
		///<returns>
		///List[BOField]
		///</returns>
		///<parameters>
		///
		///</parameters>
		public static IList<BOField> FieldCollection()
		{
			try
			{
				IList<BOField> boFieldCollection = new List<BOField>();
				IList<DAOField> daoFieldCollection = DAOField.SelectAll();
			
				foreach(DAOField daoField in daoFieldCollection)
					boFieldCollection.Add(new BOField(daoField));
			
				return boFieldCollection;
			}
			catch
			{
				throw;
			}
		}
		
		
		///<Summary>
		///FieldCollectionCount
		///This method returns the collection count of BOField objects
		///</Summary>
		///<returns>
		///Int32
		///</returns>
		///<parameters>
		///
		///</parameters>
		public static Int32 FieldCollectionCount()
		{
			try
			{
				Int32 objCount = DAOField.SelectAllCount();
				return objCount;
			}
			catch
			{
				throw;
			}
		}
		
		
		///<Summary>
		///FieldCollectionFromSearchFields
		///This method returns the collection of BOField objects, filtered by a search object
		///</Summary>
		///<returns>
		///List<BOField>
		///</returns>
		///<parameters>
		///
		///</parameters>
		public static IList<BOField> FieldCollectionFromSearchFields(BOField boField)
		{
			try
			{
				IList<BOField> boFieldCollection = new List<BOField>();
				DAOField daoField = new DAOField();
				daoField.Id = boField.Id;
				daoField.Name = boField.Name;
				daoField.Instance = boField.Instance;
				daoField.Value = boField.Value;
				daoField.FlightRef = boField.FlightRef;
				IList<DAOField> daoFieldCollection = DAOField.SelectAllBySearchFields(daoField);
			
				foreach(DAOField resdaoField in daoFieldCollection)
					boFieldCollection.Add(new BOField(resdaoField));
			
				return boFieldCollection;
			}
			catch
			{
				throw;
			}
		}
		
		
		///<Summary>
		///FieldCollectionFromSearchFieldsCount
		///This method returns the collection count of BOField objects, filtered by a search object
		///</Summary>
		///<returns>
		///Int32
		///</returns>
		///<parameters>
		///
		///</parameters>
		public static Int32 FieldCollectionFromSearchFieldsCount(BOField boField)
		{
			try
			{
				DAOField daoField = new DAOField();
				daoField.Id = boField.Id;
				daoField.Name = boField.Name;
				daoField.Instance = boField.Instance;
				daoField.Value = boField.Value;
				daoField.FlightRef = boField.FlightRef;
				Int32 objCount = DAOField.SelectAllBySearchFieldsCount(daoField);
				return objCount;
			}
			catch
			{
				throw;
			}
		}
		
		#endregion

		#region member properties
		
		public virtual Guid? Id
		{
			get
			{
				 return _id;
			}
			set
			{
				_id = value;
				_isDirty = true;
			}
		}
		
		public virtual string Name
		{
			get
			{
				 return _name;
			}
			set
			{
				_name = value;
				_isDirty = true;
			}
		}
		
		public virtual string Instance
		{
			get
			{
				 return _instance;
			}
			set
			{
				_instance = value;
				_isDirty = true;
			}
		}
		
		public virtual string Value
		{
			get
			{
				 return _value;
			}
			set
			{
				_value = value;
				_isDirty = true;
			}
		}
		
		public virtual string FlightRef
		{
			get
			{
				 return _flightRef;
			}
			set
			{
				_flightRef = value;
				_isDirty = true;
			}
		}
		
		public virtual object Repository
		{
			get {	return null;	}
			set	{	}
		}
		
		public virtual bool IsDirty
		{
			get
			{
				 return _isDirty;
			}
			set
			{
				_isDirty = value;
			}
		}
		#endregion
	}
}